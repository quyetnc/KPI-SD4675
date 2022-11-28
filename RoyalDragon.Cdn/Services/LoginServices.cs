using RoyalDragon.Cdn.Models.Entities;
using RoyalDragon.Cdn.Models.LoginModels;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using RoyalDragon.Cdn.Utilities;

namespace RoyalDragon.Cdn.Services
{
    public class LoginServices : BaseServices, ILoginServices
    {
        public LoginServices(IWebHostEnvironment environment, FamilyTreeDbContext db, IHttpContextAccessor httpContextAccessor) : base(environment, db, httpContextAccessor)
        {
        }

        public async Task<bool> SignInAsync(LoginRequest login)
        {
            User user = await _db.User.FirstOrDefaultAsync(x => x.Username == login.Username);
            if (user != null)
            {
                if (!user.Password.IsEqualPassword(login.Password))
                    return false;
                var identity = new ClaimsIdentity(CookieAuthenticationDefaults.AuthenticationScheme, ClaimTypes.Name, ClaimTypes.Role);
                identity.AddClaim(new Claim(ClaimTypes.NameIdentifier, user.UserId.ToString()));
                identity.AddClaim(new Claim(ClaimTypes.Name, login.Username));
                identity.AddClaim(new Claim(ClaimTypes.Role, "User"));
                var principal = new ClaimsPrincipal(identity);
                var authProperties = new AuthenticationProperties
                {
                    AllowRefresh = true,
                    ExpiresUtc = DateTimeOffset.Now.AddDays(1),
                    IsPersistent = true,
                };
                await _httpContextAccessor.HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(principal), authProperties);
                return true;
            }
            return false;
        }
    }
    public interface ILoginServices
    {
        Task<bool> SignInAsync(LoginRequest login);
    }
}
