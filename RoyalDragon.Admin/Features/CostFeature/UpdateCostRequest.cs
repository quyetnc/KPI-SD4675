using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;
using System.ComponentModel.DataAnnotations.Schema;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace RoyalDragon.Admin.Features.CostFeature
{
    public class UpdateCostRequest : IRequest<ResultCustomModel<bool>>
    {
        public Cost? Cost { get; set; }
        public class QueryHandler : IRequestHandler<UpdateCostRequest, ResultCustomModel<bool>>
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
            public class CommandValidator : AbstractValidator<UpdateCostRequest>
            {
                public CommandValidator()
                {
                    RuleFor(m => m.Cost.Reason).NotNull();
                    RuleFor(m => m.Cost.AmountOfMoney).GreaterThan(0);
                }
            }
            public async Task<ResultCustomModel<bool>> Handle(UpdateCostRequest request, CancellationToken cancellationToken)
            {
                var cost = await _db.Cost.FindAsync(request.Cost.CostId);
                if (cost == null)
                {
                    return new ResultCustomModel<bool>
                    {
                        Code = 400,
                        Message = "Không tìm thấy chi phí mà bạn yêu cầu",
                        Success = false,
                        Data = false
                    };
                }
                if (cost.IsApprove)
                {
                    return new ResultCustomModel<bool>
                    {
                        Code = 400,
                        Message = "Không thể chỉnh sửa chi phí đã được phê duyệt!",
                        Success = false,
                        Data = false
                    };
                }
                int save = await _db.SaveChangesAsync();
                return new ResultCustomModel<bool>
                {
                    Code = save > 1 ? 200 : 400,
                    Message = save > 1 ? "Thành công" : "Có gì đó sai sai, vui lòng kiểm tra lại",
                    Success = save > 1,
                    Data = save > 1,
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
