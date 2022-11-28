using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Hosting;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;
using System.ComponentModel.DataAnnotations.Schema;

namespace RoyalDragon.Admin.Features.CostFeature
{
    public class DeleteCostRequest : IRequest<ResultCustomModel<bool>>
    {
        public int CostId { get; set; }

        public class QueryHandler : IRequestHandler<DeleteCostRequest, ResultCustomModel<bool>>
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

            public async Task<ResultCustomModel<bool>> Handle(DeleteCostRequest request, CancellationToken cancellationToken)
            {
                var cost = await _db.Cost.FindAsync(request.CostId);
                if (cost == null)
                    return new ResultCustomModel<bool>
                    {
                        Code = 404,
                        Success = false,
                        Message = "Không tìm thấy chi phí mà bạn yêu cầu",
                        Data =false
                    };
                if (cost.IsApprove)
                {
                    return new ResultCustomModel<bool>
                    {
                        Code = 400,
                        Message = "Không thể xoá chi phí đã được phê duyệt!",
                        Success = false,
                        Data = false
                    };
                }
                int save = await _db.SaveChangesAsync();
                return new ResultCustomModel<bool>
                {
                    Code = save > 0 ? 200 : 400,
                    Success = save > 0,
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
