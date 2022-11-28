using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;
using RoyalDragon.Admin.Utilities;
using System.ComponentModel.DataAnnotations.Schema;

namespace RoyalDragon.Admin.Features.UserFeature
{
    public class CreateUserRequest : IRequest<ResultCustomModel<User>>
    {
        public User? User { get; set; }
        public int? UserId { get; set; }
        public class QueryHandler : IRequestHandler<CreateUserRequest, ResultCustomModel<User>>
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

            public async Task<ResultCustomModel<User>> Handle(CreateUserRequest request, CancellationToken cancellationToken)
            {
                request.User.IsActive = true;
                request.User.CreateOn = DateTime.Now;
                request.User.Password = request.User.Password.ToScryptEncode();
                #region Validate dữ liệu trùng
                var listExistData = await _db.User.Where(x => x.Username == request.User.Username.Trim().ToLower() || x.Phone == request.User.Phone || x.Email == request.User.Email).ToListAsync();
                if (listExistData.Any())
                {
                    if (listExistData.Any(x => x.Username == request.User.Username.Trim().ToLower()))
                    {
                        return new ResultCustomModel<User>
                        {
                            Code = 400,
                            Data = null,
                            Message = $"Tên tài khoản {request.User.Username} đã tồn tại!",
                            Success = false
                        };
                    }
                    if (listExistData.Any(x => x.Phone == request.User.Phone))
                    {
                        return new ResultCustomModel<User>
                        {
                            Code = 400,
                            Data = null,
                            Message = $"Số điện thoại {request.User.Phone} đã tồn tại!",
                            Success = false
                        };
                    }
                    if (listExistData.Any(x => x.Email == request.User.Email))
                    {
                        return new ResultCustomModel<User>
                        {
                            Code = 400,
                            Data = null,
                            Message = $"Email {request.User.Email} đã tồn tại!",
                            Success = false
                        };
                    }
                }
                request.User.UserId = 0;
                #endregion
                _db.Entry(request.User).State = EntityState.Added;
                int save = await _db.SaveChangesAsync();
                foreach (UserRole ur in request.User.UserRole)
                {
                    ur.UserId = request.User.UserId;
                    ur.User = null;
                    ur.RoleId = ur.Role.RoleId;
                    ur.Role = null;
                }
                await _db.UserRole.AddRangeAsync(request.User.UserRole);
                save += await _db.SaveChangesAsync();
                return new ResultCustomModel<User>
                {
                    Code = save > 1 ? 200 : 400,
                    Message = save > 1 ? "Thành công" : "Có gì đó sai sai, vui lòng kiểm tra lại",
                    Success = save > 1,
                    Data = request.User,
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
