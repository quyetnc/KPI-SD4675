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
using Google.Apis.Auth;

namespace RoyalDragon.Admin.Services
{
    public class LoginServices : BaseServices, ILoginServices
    {
        private readonly IConfiguration _config;
        private readonly IMapper _mapper;
        public LoginServices(
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

        public async Task<ResultCustomModel<CustomerLoginResponsee>> CustomerLoginAsync(LoginRequest login)
        {
            var customer = await _db.Customer.FirstOrDefaultAsync(x => x.Username == login.Username || x.Phone == login.Username || x.Email == login.Username);
            if (customer != null)
            {
                if (!customer.Password.IsEqualPassword(login.Password))
                    return new ResultCustomModel<CustomerLoginResponsee>
                    {
                        Code = 400,
                        Data = null,
                        Success = false,
                        Message = "Sai tên tài khoản hoặc mật khẩu"
                    };
                var response = _mapper.Map<CustomerLoginResponsee>(customer);
                string token = GenerateJWTCustomer(customer);
                response.Token = token;
                return new ResultCustomModel<CustomerLoginResponsee>
                {
                    Code = 200,
                    Data = response,
                    Success = true,
                    Message = "Ok"
                }; ;
            }
            return new ResultCustomModel<CustomerLoginResponsee>
            {
                Code = 400,
                Data = null,
                Success = false,
                Message = "Sai tên tài khoản hoặc mật khẩu"
            }; ;
        }

        public async Task<ResultCustomModel<CustomerLoginResponsee>> LoginGooglePlugin(GoogleJsonWebSignature.Payload login)
        {
            var customer = await _db.Customer.FirstOrDefaultAsync(x => x.Email == login.Email);
            if (customer != null)
            {
                var response = _mapper.Map<CustomerLoginResponsee>(customer);
                string token = GenerateJWTCustomer(customer);
                response.Token = token;
                return new ResultCustomModel<CustomerLoginResponsee>
                {
                    Code = 200,
                    Data = response,
                    Success = true,
                    Message = "Ok"
                }; ;
            }
            else
            {
                var now = DateTime.Now;
                Customer customerNew = new Customer()
                {
                    Email = login.Email,
                    FullName = login.Name,
                    Image = login.Picture,
                    Username = $"{login.Name.GenerateSlug()}_LoginGoogle_{now.Day:00}           {now.Month:00}{now.Year:00}",
                    Password = "123456".ToScryptEncode(),
                    Phone = "",
                    CreateOn = now,
                    IsBadCustomer = false,
                    IsActive = true,
                    CreateByUserId = 5,
                    CreateBy = "Google"
                };
                _db.Entry(customerNew).State = EntityState.Added;
                int rs = await _db.SaveChangesAsync(); 
                if (rs > 0)
                {
                    var response = _mapper.Map<CustomerLoginResponsee>(customerNew);
                    string token = GenerateJWTCustomer(customerNew);
                    response.Token = token;
                    return new ResultCustomModel<CustomerLoginResponsee>
                    {
                        Code = 200,
                        Data = response,
                        Success = true,
                        Message = "Ok"
                    }; ;
                }    
                else
                {
                    return new ResultCustomModel<CustomerLoginResponsee>
                    {
                        Code = 400,
                        Data = null,
                        Success = rs > 0,
                        Message = "Lỗi không thể đăng nhập"
                    }; ;
                }
               
            }
        }

        public async Task<ResultCustomModel<LoginResponse>> SignInAsync(LoginRequest login)
        {
            VLogin user = await _db.VLogin.FirstOrDefaultAsync(x => x.Username == login.Username);
            if (user != null)
            {
                if (!user.Password.IsEqualPassword(login.Password))
                    return new ResultCustomModel<LoginResponse>
                    {
                        Code = 400,
                        Data = null,
                        Success = false,
                        Message = "Sai tên tài khoản hoặc mật khẩu"
                    };
                LoginResponse response = _mapper.Map<LoginResponse>(user);
                (string Token, string[] ListRole) jwt = GenerateJWT(user);
                response.Token = jwt.Token;
                response.Role = jwt.ListRole;
                response.RoleName = jwt.ListRole.FirstOrDefault();
                return new ResultCustomModel<LoginResponse>
                {
                    Code = 200,
                    Data = response,
                    Success = true,
                    Message = "Ok"
                }; ;
            }
            return new ResultCustomModel<LoginResponse>
            {
                Code = 400,
                Data = null,
                Success = false,
                Message = "Sai tên tài khoản hoặc mật khẩu"
            }; ;
        }

        private (string Token, string[] ListRole) GenerateJWT(VLogin user)
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
            var listRoles = user?.ListRoleName.Split(',');
            foreach (string item in listRoles)
            {
                claims.Add(new Claim(ClaimTypes.Role, item));
            }
            DateTime expire = DateTime.Now.AddHours(12);
            var token = new JwtSecurityToken(_config["Jwt:Issuer"],
                _config["Jwt:Issuer"],
                claims,
                expires: expire,
                signingCredentials: credentials);
            return (new JwtSecurityTokenHandler().WriteToken(token), listRoles);
        }
        private string GenerateJWTCustomer(Customer customer)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            List<Claim> claims = new List<Claim>
            {
                new Claim(ClaimTypes.Name, customer.Username),
                new Claim(ClaimTypes.NameIdentifier, customer.CustomerId.ToString()),
                new Claim(ClaimTypes.Role, "Customer")
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
    public interface ILoginServices
    {
        Task<ResultCustomModel<LoginResponse>> SignInAsync(LoginRequest login);
        Task<ResultCustomModel<CustomerLoginResponsee>> CustomerLoginAsync(LoginRequest login);
        Task<ResultCustomModel<CustomerLoginResponsee>> LoginGooglePlugin(GoogleJsonWebSignature.Payload login);
    }
}
