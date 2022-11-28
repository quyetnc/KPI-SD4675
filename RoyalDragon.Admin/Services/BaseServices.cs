using RoyalDragon.Admin.Models.Entities;

namespace RoyalDragon.Admin.Services
{
    public class BaseServices
    {
        public readonly IWebHostEnvironment _environment;
        public readonly RoyalDragonDbContext _db;
        public readonly IHttpContextAccessor _httpContextAccessor;
        public readonly IRoyalDragonDbContextProcedures _sp;
        public BaseServices(IWebHostEnvironment environment,
                            RoyalDragonDbContext db,
                            IHttpContextAccessor httpContextAccessor,
                            IRoyalDragonDbContextProcedures sp)
        {
            _environment = environment;
            _db = db;
            _httpContextAccessor = httpContextAccessor;
            _sp = sp;
        }
    }
}
