using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.AspNetCore.Http.Features;
using Microsoft.AspNetCore.HttpOverrides;
using Microsoft.AspNetCore.Server.IISIntegration;
using Microsoft.EntityFrameworkCore;
using System.Text;
using RoyalDragon.Admin.Models.Entities;
using RoyalDragon.Admin.Services;
using RoyalDragon.Model.Cdn.Entities;
using RoyalDragon.Model.ContentDeliveryNetwork.Entities;
using Microsoft.IdentityModel.Tokens;
using RoyalDragon.Admin.Models.Mappers;
using Microsoft.AspNetCore.Builder;
using Microsoft.OpenApi.Models;
using RoyalDragon.Common.Validators;
using FluentValidation.AspNetCore;
using System.Reflection;
using FluentValidation;
using MediatR;
using Microsoft.Extensions.FileProviders;
using RoyalDragon.Admin.Middlewares.PhoneHubs;

namespace RoyalDragon.Admin
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
            services.AddDbContext<RoyalDragonDbContext>(options =>
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
            services.AddMediatR(typeof(Startup), typeof(ValidatorExtensions));
            services.AddAuthorization(options =>
                                     options.AddPolicy("Something",
                                                           policy => policy.RequireClaim("Permission", "CanViewPage", "CanViewAnything")
                                                      )
                                    );
            services.AddSwaggerGen(setup =>
            {
                // Include 'SecurityScheme' to use JWT Authentication
                var jwtSecurityScheme = new OpenApiSecurityScheme
                {
                    BearerFormat = "JWT",
                    Name = "JWT Authentication",
                    In = ParameterLocation.Header,
                    Type = SecuritySchemeType.Http,
                    Scheme = JwtBearerDefaults.AuthenticationScheme,
                    Description = "Put **_ONLY_** your JWT Bearer token on textbox below!",

                    Reference = new OpenApiReference
                    {
                        Id = JwtBearerDefaults.AuthenticationScheme,
                        Type = ReferenceType.SecurityScheme
                    }
                };

                setup.AddSecurityDefinition(jwtSecurityScheme.Reference.Id, jwtSecurityScheme);

                setup.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        { jwtSecurityScheme, Array.Empty<string>() }
    });
                setup.SwaggerDoc("v1", new OpenApiInfo { Title = "BlockChainApi", Version = "v1" });
            });
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
            services.AddAuthentication(x =>
            {
                x.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
                x.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
            })
             .AddJwtBearer(options =>
             {
                 options.TokenValidationParameters = new TokenValidationParameters
                 {
                     ValidateIssuer = true,
                     ValidateAudience = true,
                     ValidateLifetime = true,
                     ValidateIssuerSigningKey = true,
                     ValidIssuer = Configuration["Jwt:Issuer"],
                     ValidAudience = Configuration["Jwt:Issuer"],
                     IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Configuration["Jwt:Key"]))
                 };
                 options.Events = new JwtBearerEvents
                 {
                     OnMessageReceived = context =>
                     {
                         var accessToken = context.Request.Query["access_token"];
                         // If the request is for our hub...
                         var path = context.HttpContext.Request.Path;
                         if (!string.IsNullOrEmpty(accessToken) &&
                             (path.StartsWithSegments("/chathub")))
                         {
                             // Read the token out of the query string
                             context.Token = accessToken;
                         }
                         return Task.CompletedTask;
                     }
                 };
             });
            services.AddAuthentication(IISDefaults.AuthenticationScheme);
            services.AddAuthorization();
            services.AddControllers()
                                  .AddNewtonsoftJson(options =>
                                      options.SerializerSettings.ReferenceLoopHandling =
                                        Newtonsoft.Json.ReferenceLoopHandling.Ignore
            );
            services.AddValidatorsFromAssembly(Assembly.GetExecutingAssembly());
            services.AddFluentValidationAutoValidation()
                .AddFluentValidationClientsideAdapters();
            services.AddAutoMapper(typeof(AutoMapperProfile).Assembly);
            #region Inject Services
            services.AddScoped<ILoginServices, LoginServices>();
            services.AddScoped<IProductServices, ProductServices>();
            services.AddScoped<IUserServices, UserServices>();
            services.AddScoped<IExportServices, ExportServices>();
            services.AddScoped<IRoyalDragonDbContextProcedures, RoyalDragonDbContextProcedures>();
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
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
                app.UseSwagger();
                app.UseSwaggerUI(c => c.SwaggerEndpoint("/swagger/v1/swagger.json", "BlockChainApi v1"));
            }
            //if (!env.IsDevelopment())
            //{
            //    app.UseHttpsRedirection();
            //}
            // app.UseHttpsRedirection();
            app.UseStaticFiles(new StaticFileOptions()
            {
                FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"ExportForms")),
                RequestPath = new PathString("/ExportForms")
            });
            var pathFileClient = Path.Combine(Directory.GetCurrentDirectory(), @"FilesClient");
            if (!Directory.Exists(pathFileClient))
            {
                Directory.CreateDirectory(pathFileClient);
            }
            app.UseStaticFiles(new StaticFileOptions()
            {
                FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), @"FilesClient")),
                RequestPath = new PathString("/FilesClient")
            });
            app.UseCors(builder =>
                builder
                .AllowAnyMethod()
                .AllowAnyHeader()
                .SetIsOriginAllowed(origin => true) // allow any origin
                .AllowCredentials());
            app.UseRouting();
            // Shows UseCors with CorsPolicyBuilder.
            app.UseStaticFiles();
            app.UseAuthentication();
            app.UseAuthorization();
            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapHub<PhoneHub>("/phoneHub");
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
                endpoints.MapFallbackToController("Index", "Home");
            });
            app.Use(async (context, next) =>
            {
                await next();
                if (context.Response.StatusCode == 401 || context.Response.StatusCode == 403)
                {
                    context.Request.Path = "/Login";
                    await next();
                }
            });
        }
    }
}
