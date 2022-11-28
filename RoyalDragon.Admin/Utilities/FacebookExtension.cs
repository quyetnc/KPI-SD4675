using RoyalDragon.Admin.Models.FacebookModels;

namespace RoyalDragon.Admin.Utilities
{
    public static class FacebookExtension
    {
        public async static Task<string> GetAccessToken(string client_id= "697501545331984",string client_secret = "a4fc40467c7597c8ccf4b5ad82e9c454")
        {
            string url = $"oauth/access_token?client_id={client_id}&client_secret={client_secret}&grant_type=client_credentials";
            HttpExtension.BaseAddress = "https://graph.facebook.com/";
            var data=await HttpExtension.Get<AccessToken>(url);
            return data?.access_token ?? string.Empty;
        }
    }
}
