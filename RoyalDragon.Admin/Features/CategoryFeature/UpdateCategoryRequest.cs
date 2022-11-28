using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;
using RoyalDragon.Admin.Utilities;
using System.ComponentModel.DataAnnotations.Schema;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace RoyalDragon.Admin.Features.CategoryFeather
{
    public class UpdateCategoryRequest : IRequest<ResultCustomModel<bool>>
    {
        public Category? Category { get; set; }
        public class QueryHandler : IRequestHandler<UpdateCategoryRequest, ResultCustomModel<bool>>
        {
            private readonly RoyalDragonDbContext _db;
            private readonly IMapper _mapper;
            private readonly IMediator _mediator;
            public QueryHandler (
                RoyalDragonDbContext db,
                IMapper mapper,
                IConfiguration configuration,
                IMediator mediator )
            {
                _db = db;
                _mapper = mapper;
                _mediator = mediator;
            }
            public class CommandValidator : AbstractValidator<UpdateCategoryRequest>
            {
                public CommandValidator ( )
                {
                    RuleFor(m => m).NotNull();
                    RuleFor(m => m.Category.Name).NotNull().MinimumLength(1).WithMessage("Yêu cầu <b style='color:red;'>\"tên danh mục\"</b> ");
                    RuleFor(m => m.Category.Image).NotNull().MinimumLength(1).WithMessage("Yêu cầu <b style='color:red;'>\"hình ảnh\"</b>");
                }
            }
            public async Task<ResultCustomModel<bool>> Handle ( UpdateCategoryRequest request, CancellationToken cancellationToken )
            {
                var category = await _db.Category.AsNoTracking().FirstOrDefaultAsync(x => x.Name == request.Category.Name.Trim().ToLower() && x.IsActive);
                if (category != null && category.CategoryId != request.Category.CategoryId)
                    return new ResultCustomModel<bool>
                    {
                        Code = 400,
                        Message = $"Đã tồn tại danh mục {request.Category.Name} trong hệ thống!",
                        Success = false,
                        Data = false,
                    };
                if (string.IsNullOrEmpty(request.Category.Name) || string.IsNullOrEmpty(request.Category.Image))
                    return new ResultCustomModel<bool>
                    {
                        Code = 400,
                        Message = $"Danh mục yêu cầu tên và hình ảnh",
                        Success = false,
                        Data = false,
                    };
                request.Category.IsActive = true;
                request.Category.Slug = request.Category.Name.GenerateSlug();
                request.Category.CreateOn = DateTime.Now;
                //_db.Category.Update(request.Category);
                _db.Entry(request.Category).State = EntityState.Modified;
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
            public Profile ( )
            {
                //CreateMap<LauncherApplication, Result>();
            }
        }
    }
}
