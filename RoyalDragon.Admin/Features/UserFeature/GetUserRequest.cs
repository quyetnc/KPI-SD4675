using AutoMapper;
using MediatR;
using Microsoft.CodeAnalysis;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;
using System.ComponentModel.DataAnnotations.Schema;

namespace RoyalDragon.Admin.Features.UserFeature
{
    public class GetUserRequest : IRequest<ResultCustomModel<User>>
    {
        public int UserId { get; set; } = 0;

        public class QueryHandler : IRequestHandler<GetUserRequest, ResultCustomModel<User>>
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

            public async Task<ResultCustomModel<User>> Handle(GetUserRequest request, CancellationToken cancellationToken)
            {
                var data = await _db.User.FirstOrDefaultAsync(x => x.UserId == request.UserId);
                return new ResultCustomModel<User>
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
