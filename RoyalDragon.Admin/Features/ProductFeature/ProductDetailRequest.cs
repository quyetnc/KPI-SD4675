using AutoMapper;
using Dapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;
using RoyalDragon.Common.Commons;
using Microsoft.Data.SqlClient;
using RoyalDragon.Admin.Utilities;

namespace RoyalDragon.Admin.Features.ProductFeature
{
    public class ProductDetailRequest : IRequest<ResultCustomModel<ProductDetailResponse>>
    {
        public int ProductId { get; set; } = 0;

        public class QueryHandler : IRequestHandler<ProductDetailRequest, ResultCustomModel<ProductDetailResponse>>
        {
            private readonly RoyalDragonDbContext _db;
            private readonly IMapper _mapper;
            private readonly IMediator _mediator;
            public QueryHandler(
                RoyalDragonDbContext db,
                IMapper mapper,
                IMediator mediator)
            {
                _db = db;
                _mapper = mapper;
                _mediator = mediator;
            }

            public async Task<ResultCustomModel<ProductDetailResponse>> Handle(ProductDetailRequest request, CancellationToken cancellationToken)
            {
                var connection = _db.Database.GetDbConnection() as SqlConnection;
                if (connection.State != System.Data.ConnectionState.Open)
                {
                    await connection.OpenAsync();
                }
                var queryData = await _db.StoredProcedureAsync(StoredProcedureConst.RD_GetProductDetail,new { ProductId= request.ProductId });
                var lstProductDetails = await queryData.ReadAsync<VProductDetail>();
                var review = await queryData.ReadAsync<VReview>();
                return new ResultCustomModel<ProductDetailResponse>
                {
                    Code = lstProductDetails.Any() ? 200 : 400,
                    Success = lstProductDetails.Any(),
                    Message = lstProductDetails.Any() ? "Ok":"Không tìm thấy sản phẩm này",
                    Data = new ProductDetailResponse
                    {
                        ProductDetail = lstProductDetails.FirstOrDefault(),
                        Reviews = review
                    }
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
