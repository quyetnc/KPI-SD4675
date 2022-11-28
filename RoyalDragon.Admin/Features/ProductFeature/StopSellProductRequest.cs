using AutoMapper;
using MediatR;
using Microsoft.CodeAnalysis;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;
using System.ComponentModel.DataAnnotations.Schema;

namespace RoyalDragon.Admin.Features.ProductFeature
{
    public class StopSellProductRequest : IRequest<ResultCustomModel<bool>>
    {
        public int ProductId { get; set; } = 0;
        public class QueryHandler : IRequestHandler<StopSellProductRequest, ResultCustomModel<bool>>
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

            public async Task<ResultCustomModel<bool>> Handle(StopSellProductRequest request, CancellationToken cancellationToken)
            {
                var data = await _db.Product.FirstOrDefaultAsync(x => x.ProductId == request.ProductId);
                if (data == null)
                    return new ResultCustomModel<bool>
                    {
                        Code = 404,
                        Success = false,
                        Message = "Không tìm thấy sản phẩm",
                        Data = false
                    };
                data.IsSell = !data.IsSell;
                int save = await _db.SaveChangesAsync();
                return new ResultCustomModel<bool>
                {
                    Code = save > 0 ? 200 : 400,
                    Success = save > 0,
                    Message = save > 0 ? "Thành công" : "Lỗi khi lưu",
                    Data = save > 0
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
