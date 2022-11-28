using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;
using RoyalDragon.Admin.Models.LoginModels;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using RoyalDragon.Admin.Utilities;
using Microsoft.IdentityModel.Tokens;
using RoyalDragon.Model.Models.Entities;
using System.IdentityModel.Tokens.Jwt;
using System.Text;
using AutoMapper;

namespace RoyalDragon.Admin.Services
{
    public class UserServices : BaseServices, IUserServices
    {
        private readonly IConfiguration _config;
        private readonly IMapper _mapper;
        public UserServices(
            IWebHostEnvironment environment,
            RoyalDragonDbContext db,
            IHttpContextAccessor httpContextAccessor,
            IRoyalDragonDbContextProcedures sp,
            IConfiguration config,
            IMapper mapper) : base(environment, db, httpContextAccessor, sp)
        {
            _config = config;
            _mapper = mapper;
        }

        public Task<ResultCustomModel<List<User>>> Create()
        {
            throw new NotImplementedException();
        }

        public Task<ResultCustomModel<List<User>>> Disable()
        {
            throw new NotImplementedException();
        }

        public Task<ResultCustomModel<List<User>>> List()
        {
            throw new NotImplementedException();
        }

        public async Task<ResultCustomModel<List<User>>> ListProduct()
        {
            var data = await _db.User.ToListAsync();
            return new ResultCustomModel<List<User>>
            {
                Code = 200,
                Data = data,
                Message = "Ok",
                Success = true
            };
        }

        public Task<ResultCustomModel<List<User>>> ResetPassword()
        {
            throw new NotImplementedException();
        }

        public Task<ResultCustomModel<List<User>>> Update()
        {
            throw new NotImplementedException();
        }
    }
    public interface IUserServices
    {
        Task<ResultCustomModel<List<User>>> List();
        Task<ResultCustomModel<List<User>>> Create();
        Task<ResultCustomModel<List<User>>> Update();
        Task<ResultCustomModel<List<User>>> Disable();
        Task<ResultCustomModel<List<User>>> ResetPassword();
    }
}
