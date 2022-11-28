using RoyalDragon.Cdn.Models.Entities;
using RoyalDragon.Cdn.Models.FamilyTreeModels;
using Microsoft.EntityFrameworkCore;

namespace RoyalDragon.Cdn.Services
{
    public class FamilyTreeService : BaseServices, IFamilyTreeService
    {
        public FamilyTreeService(IWebHostEnvironment environment, FamilyTreeDbContext db, IHttpContextAccessor httpContextAccessor) : base(environment, db, httpContextAccessor)
        {

        }

        public async Task<FamilyRelationShip> GetFamilyTree(int userId, int id)
        {
            var data = await _db.FamilyRelationShip.FirstOrDefaultAsync(x => x.UserId == userId && x.Id == id);
            return data;
        }

        public async Task<List<FamilyTreeResponse>> GetRelations(int userId)
        {
            var data = await _db.FamilyRelationShip.Where(x => x.UserId == userId).ToListAsync();
            var response = new List<FamilyTreeResponse>();
            data.ForEach(x =>
            {
                response.Add(new FamilyTreeResponse
                {
                    Bdate = x.Bdate,
                    Ddate = x.Ddate,
                    Fid = x.Fid,
                    Gender = x.Gender,
                    Id = x.Id,
                    Img = x.Img,
                    Mid = x.Mid,
                    Name = x.Name,
                    Relationship = x.Relationship,
                    Tags = x.Tags == null ? null : new string[1] { x.Tags },
                    Pids = (x.Pids == null || x.Pids.Split(',').Length == 0) ? null : Array.ConvertAll(x.Pids.Split(','), int.Parse)
                });
            });
            return response;
        }
    }
    public interface IFamilyTreeService
    {
        Task<FamilyRelationShip> GetFamilyTree(int userId, int id);
        Task<List<FamilyTreeResponse>> GetRelations(int userId);
    }
}
