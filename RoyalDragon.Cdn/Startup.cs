using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.Server.IISIntegration;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using AutoMapper;
using System.Net;
using System.Net.WebSockets;
using System.Text;
using System.Threading;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication.Cookies;
using RoyalDragon.Cdn.Models.Entities;
using RoyalDragon.Cdn.Services;
using RoyalDragon.Model.Cdn.Entities;
using RoyalDragon.Model.Mappers;
using RoyalDragon.Model.ContentDeliveryNetwork.Entities;

namespace RoyalDragon.Cdn
{
    public class Startup
    {
        private const string ApiCorsPolicy = "ApiCorsPolicy";
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddMvc().AddRazorRuntimeCompilation();
            services.AddControllers();
            services.AddRazorPages();
            services.AddControllersWithViews()
            .AddNewtonsoftJson(options =>
            options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore
            );

            services.AddCors();
            services.AddDbContext<FamilyTreeDbContext>(options =>
                                         options.UseSqlServer(
                                             Configuration.GetConnectionString("DefaultConnection")
                                         ));
            services.AddDbContext<SMART_AmarisContext>(options =>
                                         options.UseSqlServer(
                                             Configuration.GetConnectionString("RoyalDragonConnection")
                                         ));
            services.AddDbContext<ContentDeliveryNetworkContext>(options =>
                                         options.UseSqlServer(
                                             Configuration.GetConnectionString("ContentDeliveryNetwork")
                                         ));
            services.AddAuthorization(options =>
                                     options.AddPolicy("Something",
                                                           policy => policy.RequireClaim("Permission", "CanViewPage", "CanViewAnything")
                                                      )
                                    );
            services.Configure<FormOptions>(options =>
            {
                options.ValueLengthLimit = int.MaxValue;
                options.MultipartBodyLengthLimit = int.MaxValue; // if don't set default value is: 128 MB
                options.MultipartHeadersLengthLimit = int.MaxValue;
            });
            services.Configure<IISServerOptions>(options =>
            {
                options.MaxRequestBodySize = int.MaxValue;
            });
            services.AddHttpContextAccessor();
            services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme)
            .AddCookie(o =>
            {
                o.AccessDeniedPath = new PathString("/Login");
                o.Cookie.Name = CookieAuthenticationDefaults.AuthenticationScheme;
                o.SlidingExpiration = true;
                o.ExpireTimeSpan = DateTime.Now.AddDays(1).TimeOfDay;
                o.LoginPath = new PathString("/Login");
                o.ReturnUrlParameter = CookieAuthenticationDefaults.ReturnUrlParameter;
                o.SlidingExpiration = true;
            });
            services.AddAuthorization();
            services.AddControllers()
                                  .AddNewtonsoftJson(options =>
                                      options.SerializerSettings.ReferenceLoopHandling =
                                        Newtonsoft.Json.ReferenceLoopHandling.Ignore
            );
            services.AddAutoMapper(typeof(AutoMapperProfile).Assembly);
            #region Inject Services
            services.AddScoped<ILoginServices, LoginServices>();
            services.AddScoped<IFamilyTreeService, FamilyTreeService>();
            #endregion
            services.AddSignalR();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            app.UseForwardedHeaders(new ForwardedHeadersOptions
            {
                ForwardedHeaders = ForwardedHeaders.XForwardedFor | ForwardedHeaders.XForwardedProto
            });
            if (env.IsDevelopment() || true)
            {
                app.UseDeveloperExceptionPage();
            }
            //if (!env.IsDevelopment())
            //{
            //    app.UseHttpsRedirection();
            //}
            // app.UseHttpsRedirection();
            app.UseCors(builder =>
            {
                builder
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader();
            });
            app.UseRouting();
            // Shows UseCors with CorsPolicyBuilder.
            app.UseStaticFiles();
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapControllerRoute
              (
                  name: "MyArea",
                  pattern: "{area:exists}/{controller=Home}/{action=Index}/{id?}/{name?}"
              );

                endpoints.MapControllerRoute
                (
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}/{name?}"
                );
            });
            app.Use(async (context, next) =>
            {
                await next();
                if (context.Response.StatusCode == 401|| context.Response.StatusCode==403)
                {
                    context.Request.Path = "/Login";
                    await next();
                }
            });
        }
    }
}
