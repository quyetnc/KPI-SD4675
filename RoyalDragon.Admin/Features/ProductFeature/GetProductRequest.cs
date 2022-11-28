using AutoMapper;
using MediatR;
using Microsoft.CodeAnalysis;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;
using System.ComponentModel.DataAnnotations.Schema;

namespace RoyalDragon.Admin.Features.ProductFeature
{
    public class GetProductRequest : IRequest<ResultCustomModel<Product>>
    {
        public int ProductId { get; set; } = 0;

        public class QueryHandler : IRequestHandler<GetProductRequest, ResultCustomModel<Product>>
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

            public async Task<ResultCustomModel<Product>> Handle(GetProductRequest request, CancellationToken cancellationToken)
            {
                var data = await _db.Product.FirstOrDefaultAsync(x => x.ProductId == request.ProductId);
                return new ResultCustomModel<Product>
                {
                    Code = data != null ? 200 : 404,
                    Success = data != null,
                    Message = data != null ? "Ok" : "Không tìm thấy sản phẩm",
                    Data = data
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
