using Microsoft.AspNetCore.Mvc;

namespace RoyalDragon.Admin.Controllers
{
    public class HomeController :Controller
    {
        private readonly IConfiguration _configuration;
        private readonly IWebHostEnvironment _env;

        public HomeController(IConfiguration configuration, IWebHostEnvironment env)
        {
            _configuration = configuration;
            _env = env;
        }

        // GET: Upload
        public ActionResult Index()
        {
            var useAuth0 = Environment.GetEnvironmentVariable("Guardian_Arp_UseAnonymous");
            var settings = new
            {
                API_URL = $"{HttpContext.Request.Scheme}://{HttpContext.Request.Host}{HttpContext.Request.PathBase}Api/",
                ROOT = $"{HttpContext.Request.Scheme}://{HttpContext.Request.Host}",
                PATH_BASE = $"{HttpContext.Request.PathBase}",
                USER_LOGIN = User?.Identity?.Name,
                INSTRUMENTATION_KEY = _configuration["ApplicationInsights:InstrumentationKey"],
                Domain = _configuration["Auth0:Domain"],
                Audience = _configuration["Auth0:Audience"],
                ClientId = _configuration["Auth0:Client_Id"],
                _env.EnvironmentName,
                UseAuth0 = useAuth0 != null && Convert.ToBoolean(useAuth0) && !_env.IsDevelopment(),
                RedirectProxyUri = $"{HttpContext.Request.Scheme}://{HttpContext.Request.Host}/{_configuration["RedirectProxyUri"]}",
                DefaultTfsCollection = _configuration["Tfs:DefaultCollection"]
            };

            ViewBag.Settings = settings;
            ViewBag.Env = _env.EnvironmentName;
            return View();
        }
    }
}
