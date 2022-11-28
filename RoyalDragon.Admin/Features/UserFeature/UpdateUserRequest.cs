using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;
using System.ComponentModel.DataAnnotations.Schema;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace RoyalDragon.Admin.Features.UserFeature
{
    public class UpdateUserRequest : IRequest<ResultCustomModel<bool>>
    {
        public User Product { get; set; }
        public class QueryHandler : IRequestHandler<UpdateUserRequest, ResultCustomModel<bool>>
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
            public class CommandValidator : AbstractValidator<UpdateUserRequest>
            {
                public CommandValidator()
                {
                    RuleFor(m => m).NotNull();
                }
            }
            public async Task<ResultCustomModel<bool>> Handle(UpdateUserRequest request, CancellationToken cancellationToken)
            {
                request.Product.IsActive = true;
                _db.Entry(request.Product).State = EntityState.Modified;
                int save = await _db.SaveChangesAsync();
                return new ResultCustomModel<bool>
                {
                    Code = save > 0 ? 200 : 400,
                    Message = save > 0 ? "Thành công" : "Có gì đó sai sai, vui lòng kiểm tra lại",

                    Success = save > 0,
                    Data = save > 0,
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
