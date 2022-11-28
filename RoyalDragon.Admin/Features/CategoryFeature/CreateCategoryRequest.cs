using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;
using RoyalDragon.Admin.Utilities;
using System.ComponentModel.DataAnnotations.Schema;

namespace RoyalDragon.Admin.Features.CategoryFeather
{
    public class CreateCategoryRequest : IRequest<ResultCustomModel<Category>>
    {
        public Category? Category { get; set; }
        public class QueryHandler : IRequestHandler<CreateCategoryRequest, ResultCustomModel<Category>>
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

            public async Task<ResultCustomModel<Category>> Handle ( CreateCategoryRequest request, CancellationToken cancellationToken )
            {
                var category = await _db.Category.FirstOrDefaultAsync(x => x.Name == request.Category.Name.Trim().ToLower());
                if (category != null)
                    return new ResultCustomModel<Category>
                    {
                        Code = 400,
                        Message = $"Đã tồn tại danh mục {request.Category.Name} trong hệ thống!",
                        Success = false,
                        Data = request.Category,
                    };
                if (string.IsNullOrEmpty(request.Category.Name) || string.IsNullOrEmpty(request.Category.Image))
                    return new ResultCustomModel<Category>
                    {
                        Code = 400,
                        Message = $"Danh mục yêu cầu tên và hình ảnh",
                        Success = false,
                        Data = request.Category,
                    };
                request.Category.IsActive = true;
                request.Category.Slug = request.Category.Name.GenerateSlug();
                request.Category.CreateOn = DateTime.Now;
                _db.Entry(request.Category).State = EntityState.Added;
                int save = await _db.SaveChangesAsync();
                return new ResultCustomModel<Category>
                {
                    Code = save > 0 ? 200 : 400,
                    Message = save > 0 ? "Thành công" : "Có gì đó sai sai, vui lòng kiểm tra lại",
                    Success = save > 0,
                    Data = request.Category,
                };
            }
        }
        public class Profile : AutoMapper.Profile
        {
            public Profile ( )
            {
                //CreateMap<CreateProductModel, Product>()
                //    .ForMember(x=);
            }
        }
    }

}
