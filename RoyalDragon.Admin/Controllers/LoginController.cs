using RoyalDragon.Admin.Models.LoginModels;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Mvc;
using System.Security.Claims;
using RoyalDragon.Admin.Services;
using RoyalDragon.Admin.Models.CustomModels;
using Microsoft.AspNetCore.Authorization;
using Google.Apis.Auth;
using Facebook;
using RoyalDragon.Admin.Utilities;
using RoyalDragon.Admin.Models.FacebookModels;

namespace RoyalDragon.Admin.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [AllowAnonymous]
    public class LoginController : ControllerBase
    {
        private readonly ILoginServices _loginServices;
        public LoginController(ILoginServices loginServices)
        {
            _loginServices = loginServices;
        }
        [Route("/Login")]
        [HttpPost]
        public async Task<ResultCustomModel<LoginResponse>> Login([FromBody] LoginRequest loginRequest)
        {
            var loginResult = await _loginServices.SignInAsync(loginRequest);
            return loginResult;
        }
        [Route("/CustomerLoginGoogle")]
        [HttpGet]
        public async Task<ResultCustomModel<CustomerLoginResponsee>> CustomerLoginGoogle(string token)
        {
            bool valid = true;
            GoogleJsonWebSignature.Payload payload = null;
            try
            {
                payload = await GoogleJsonWebSignature.ValidateAsync(token);
                if (!payload.Audience.Equals("832584484470-bvs6jdegen9tnh8lb72dndlu5ng0it11.apps.googleusercontent.com"))
                    valid = false;
                if (!payload.Issuer.Equals("accounts.google.com") && !payload.Issuer.Equals("https://accounts.google.com"))
                    valid = false;
                if (payload.ExpirationTimeSeconds == null)
                    valid = false;
                else
                {
                    DateTime now = DateTime.Now.ToUniversalTime();
                    DateTime expiration = DateTimeOffset.FromUnixTimeSeconds((long)payload.ExpirationTimeSeconds).DateTime;
                    if (now > expiration)
                    {
                        valid = false;
                    }
                }
            }
            catch (Exception e)
            {
                valid = false;
            }

            if (valid && payload != null)
            {
                return await _loginServices.LoginGooglePlugin(payload);
            }
            return new ResultCustomModel<CustomerLoginResponsee>
            {

            };
        }
        [Route("/CustomerLogin")]
        [HttpPost]
        public async Task<ResultCustomModel<CustomerLoginResponsee>> CustomerLogin([FromBody] LoginRequest loginRequest)
        {
            var loginResult = await _loginServices.CustomerLoginAsync(loginRequest);
            return loginResult;
        }
        [Route("/CustomerLoginFacebook")]
        [HttpGet]
        public async Task<ResultCustomModel<CheckToken.Data>> CustomerLoginFacebook(string token)
        {
            string access_token = await FacebookExtension.GetAccessToken();
            CheckToken checkToken = await HttpExtension.Get<CheckToken>($"debug_token?input_token={token}&access_token={access_token}");
            return new ResultCustomModel<CheckToken.Data>
            {
                Success = checkToken.data.is_valid,
                Data = checkToken.data.is_valid ? checkToken.data : null,
                Code = checkToken.data.is_valid ? 200 : 400,
                Message = checkToken.data.is_valid ? "Ok" : "Failed"
            };
        }
    }
}
