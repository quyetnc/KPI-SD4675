using RoyalDragon.Cdn.Models.LoginModels;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using RoyalDragon.Cdn.Services;

namespace RoyalDragon.Cdn.Controllers
{
    public class LoginController : Controller
    {
        private readonly ILoginServices _loginServices;
        public LoginController(ILoginServices loginServices)
        {
            _loginServices = loginServices;
        }
        public async Task<IActionResult> Index(LoginRequest login, string returnUrl)
        {
            if (User?.Identity?.IsAuthenticated == true)
            {
                return RedirectToAction("Index", "Home");
            }
            if (!ModelState.IsValid)
                return View();
            bool isLogin = await _loginServices.SignInAsync(login);
            if (isLogin)
            {
                if (!string.IsNullOrEmpty(returnUrl))
                    return Redirect(returnUrl);
                return RedirectToAction("Index", "Home");
            }
            ModelState.AddModelError("WrongAccount", "Sai tên tài khoản hoặc mật khẩu");
            return View();
        }
    }
}
