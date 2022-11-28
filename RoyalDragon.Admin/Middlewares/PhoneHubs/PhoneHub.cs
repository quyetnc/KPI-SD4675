using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.SignalR;
using NBitcoin.Secp256k1;
using RoyalDragon.Admin.Models.Entities;
using RoyalDragon.Admin.Models.HubModels;
using RoyalDragon.Admin.Utilities;
using RoyalDragon.Model.Models.Entities;

namespace RoyalDragon.Admin.Middlewares.PhoneHubs
{
    [Authorize]
    public class PhoneHub : Hub
    {
        private readonly RoyalDragonDbContext _db;
        public static List<UserHub> connections = new List<UserHub>();
        public PhoneHub(RoyalDragonDbContext db)
        {
            _db = db;
        }
        public async Task CallPhone(string phone)
        {
            int userId = Context.UserIdentifier.ToInt();
            IEnumerable<string> lstConnections = connections.FirstOrDefault(x => x.UserId == userId)?.Connections;
            await Clients.Caller.SendAsync("SuccessCallPhone", lstConnections.Count() >= 2);
            //Gửi yêu cầu đến máy admin
            await Clients.Clients(lstConnections).SendAsync("CallPhone", phone);
        }

        private void AddConnection()
        {
            int userId = Context.UserIdentifier.ToInt();
            UserHub? user = connections.FirstOrDefault(x => x.UserId == userId);
            if (user == null)
                connections.Add(new UserHub
                {
                    UserId = userId,
                    Connections = new List<string>
                    {
                        Context.ConnectionId
                    }
                });
            //Nếu đã tồn tại thì add connectionid thôi
            else
            {
                user.Connections.Add(Context.ConnectionId);
            }
        }
        public override Task OnDisconnectedAsync(Exception ex)
        {
            var userRemove = connections.FirstOrDefault(x => x.UserId == Context.UserIdentifier.ToInt());
            if (userRemove != null)
            {
                if (userRemove.Connections.Count == 1)
                    connections.Remove(userRemove);
                else
                {
                    userRemove.Connections.Remove(Context.ConnectionId);
                }
            }
            return base.OnDisconnectedAsync(ex);
        }
        public override Task OnConnectedAsync()
        {
            AddConnection();
            return base.OnConnectedAsync();
        }
    }
}
