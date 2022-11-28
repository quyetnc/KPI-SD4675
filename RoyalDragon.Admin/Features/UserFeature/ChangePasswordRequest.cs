using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;
using RoyalDragon.Admin.Utilities;
using System.ComponentModel.DataAnnotations.Schema;

namespace RoyalDragon.Admin.Features.UserFeature
{
    public class ChangePasswordRequest : IRequest<ResultCustomModel<bool>>
    {
        public int UserId { get; set; }
        public string password { get; set; }
        public string newPassword { get; set; }

        public class QueryHandler : IRequestHandler<ChangePasswordRequest, ResultCustomModel<bool>>
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

            public async Task<ResultCustomModel<bool>> Handle(ChangePasswordRequest request, CancellationToken cancellationToken)
            {
                var user = await _db.User.FirstOrDefaultAsync(x => request.UserId == x.UserId);
                if (user == null)
                    return new ResultCustomModel<bool>
                    {
                        Code = 404,
                        Success = false,
                        Message = "Không tìm thấy nhân viên này",
                        Data = false
                    };
                if (user.Password.IsEqualPassword(request.password.ToString()))
                {
                    user.Password = request.newPassword.ToScryptEncode();
                    _db.Entry(user).State = EntityState.Modified;
                    int save = await _db.SaveChangesAsync();
                    return new ResultCustomModel<bool>
                    {
                        Code = save > 0 ? 200 : 400,
                        Message = "Đổi mật khẩu thành công!",
                        Success = save > 0,
                        Data = true
                    };
                }
                else
                {
                    return new ResultCustomModel<bool>
                    {
                        Code = 404,
                        Success = false,
                        Message = "Mật khẩu cũ không đúng!",
                        Data = false
                    };
                }

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
