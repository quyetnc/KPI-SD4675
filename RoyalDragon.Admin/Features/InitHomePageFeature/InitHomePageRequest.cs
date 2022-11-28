using AutoMapper;
using Dapper;
using MediatR;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.EcommerceModels;
using RoyalDragon.Admin.Models.Entities;
using RoyalDragon.Admin.Models.HomePageModels;
using RoyalDragon.Common.Commons;
using RoyalDragon.Model.Models.Entities;

namespace RoyalDragon.Admin.Features.InitHomePageFeature
{
    public class InitHomePageRequest : IRequest<ResultCustomModel<InitHomePageResponse>>
    {
        public class QueryHandler : IRequestHandler<InitHomePageRequest, ResultCustomModel<InitHomePageResponse>>
        {
            private readonly RoyalDragonDbContext _db;
            private readonly IMapper _mapper;
            private readonly IMediator _mediator;
            public QueryHandler(
                RoyalDragonDbContext db,
                IMapper mapper,
                IConfiguration configuration,
                IMediator mediator)
            {
                _db = db;
                _mapper = mapper;
                _mediator = mediator;
            }

            public async Task<ResultCustomModel<InitHomePageResponse>> Handle(InitHomePageRequest request, CancellationToken cancellationToken)
            {
                var connection = _db.Database.GetDbConnection() as SqlConnection;
                if (connection.State != System.Data.ConnectionState.Open)
                {
                    await connection.OpenAsync();
                }
                var queryData = await connection.QueryMultipleAsync(StoredProcedureConst.Init_ECommerce_Page);
                var lstBanners = await queryData.ReadAsync<ProductCustom>();
                var lstFeather = await queryData.ReadAsync<ProductCustom>();
                var lstSpecialOffer = await queryData.ReadAsync<ProductCustom>();
                var lstPopular = await queryData.ReadAsync<ProductCustom>();
                var lstCategory = await queryData.ReadAsync<VListCategoryHomePage>();
                var lstConfig = await queryData.ReadAsync<ConfigurationParameters>();
                return new ResultCustomModel<InitHomePageResponse>
                {
                    Data = new InitHomePageResponse
                    {
                        Banner = lstBanners,
                        Feather = lstFeather,
                        SpecialOffer = lstSpecialOffer,
                        Popular = lstPopular,
                        ListCategory = lstCategory,
                        ListConfigurationParameters = lstConfig,
                    },
                    Success = true
                };
            }
        }
        public class Profile : AutoMapper.Profile
        {
            public Profile()
            {
                //CreateMap<LauncherApplication, Result>();
            }
        }
    }
}
