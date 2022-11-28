using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;
using System.ComponentModel.DataAnnotations.Schema;

namespace RoyalDragon.Admin.Features.UserFeature
{
    public class ListUserRequest : IRequest<ResultCustomModel<ListUserResponse>>
    {

        public class QueryHandler : IRequestHandler<ListUserRequest, ResultCustomModel<ListUserResponse>>
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

            public async Task<ResultCustomModel<ListUserResponse>> Handle(ListUserRequest request, CancellationToken cancellationToken)
            {
                var users = await _db.User.Include(x=>x.UserRole)
                                         .ThenInclude(x=>x.Role)
                                         .ToListAsync();
                return new ResultCustomModel<ListUserResponse>
                {
                    Code = 200,
                    Success = true,
                    Data = new ListUserResponse
                    {
                        Roles=await _db.Role.ToListAsync(),
                        Users=users
                    },
                    Message = "Ok"
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
    public class ListUserResponse
    {
        public List<User> Users { get; set; }
        public List<Role> Roles { get; set; }
    }
}
