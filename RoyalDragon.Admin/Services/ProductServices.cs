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
    public class ProductServices : BaseServices, IProductServices
    {
        private readonly IConfiguration _config;
        private readonly IMapper _mapper;
        public ProductServices(
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

        public Task<ResultCustomModel<bool>> DeleteProduct(int id)
        {
            throw new NotImplementedException();
        }

        public Task<ResultCustomModel<bool>> PostProduct(Product product)
        {
            throw new NotImplementedException();
        }

        public Task<ResultCustomModel<bool>> PutProduct(int id, Product product)
        {
            throw new NotImplementedException();
        }

        public async Task<ResultCustomModel<LoginResponse>> SignInAsync(LoginRequest login)
        {
            VLogin user = await _db.VLogin.FirstOrDefaultAsync(x => x.Username == login.Username);
            if (user != null)
            {
                if (!user.Password.IsEqualPassword(login.Password))
                    return new ResultCustomModel<LoginResponse>
                    {
                        Code=400,
                        Data=null,
                        Success=false,
                        Message="Sai tên tài khoản hoặc mật khẩu"
                    };
                LoginResponse response = _mapper.Map<LoginResponse>(user);
                response.Token = GenerateJWT(user);
                return  new ResultCustomModel<LoginResponse>
                {
                    Code = 200,
                    Data = response,
                    Success = true,
                    Message = "Ok"
                }; ;
            }
            return  new ResultCustomModel<LoginResponse>
            {
                Code = 400,
                Data = null,
                Success = false,
                Message = "Sai tên tài khoản hoặc mật khẩu"
            }; ;
        }

        private string GenerateJWT(VLogin user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, user.Username),
                new Claim(ClaimTypes.NameIdentifier, user.UserId.ToString()),
                new Claim("UserName", user.Username),
                new Claim("FullName", user.Fullname)
            };
            DateTime expire = DateTime.Now.AddHours(12);
            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
                _config["Jwt:Issuer"],
                claims,
                expires: expire,
                signingCredentials: credentials);
            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
    public interface IProductServices
    {
        Task<ResultCustomModel<bool>> PutProduct(int id,Product product);
        Task<ResultCustomModel<bool>> PostProduct(Product product);
        Task<ResultCustomModel<bool>> DeleteProduct(int id);
    }
}
