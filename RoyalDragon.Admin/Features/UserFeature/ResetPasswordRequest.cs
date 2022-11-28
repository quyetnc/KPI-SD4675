using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;
using RoyalDragon.Admin.Utilities;
using System.ComponentModel.DataAnnotations.Schema;

namespace RoyalDragon.Admin.Features.UserFeature
{
    public class ResetPasswordRequest : IRequest<ResultCustomModel<string>>
    {
        public int UserId { get; set; }

        public class QueryHandler : IRequestHandler<ResetPasswordRequest, ResultCustomModel<string>>
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

            public async Task<ResultCustomModel<string>> Handle(ResetPasswordRequest request, CancellationToken cancellationToken)
            {
                var user = await _db.User.FirstOrDefaultAsync(x => request.UserId == x.UserId);
                if (user == null)
                    return new ResultCustomModel<string>
                    {
                        Code = 404,
                        Success = false,
                        Message = "Không tìm thấy nhân viên này",
                        Data = ""
                    };
                user.Password = Guid.NewGuid().ToString().ToLower().ToScryptEncode();
                _db.Entry(user).State = EntityState.Modified;
                int save = await _db.SaveChangesAsync();
                return new ResultCustomModel<string>
                {
                    Code = save > 0 ? 200 : 400,
                    Success = save > 0,
                    Data = user.Password
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
