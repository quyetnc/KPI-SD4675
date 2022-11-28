using RoyalDragon.Cdn.Models.Entities;

namespace RoyalDragon.Cdn.Services
{
    public class BaseServices
    {
        public readonly IWebHostEnvironment _environment;
        public readonly FamilyTreeDbContext _db;
        public readonly IHttpContextAccessor _httpContextAccessor;
        public BaseServices(IWebHostEnvironment environment, FamilyTreeDbContext db, IHttpContextAccessor httpContextAccessor)
        {
            _environment = environment;
            _db = db;
            _httpContextAccessor = httpContextAccessor;
        }
    }
}
