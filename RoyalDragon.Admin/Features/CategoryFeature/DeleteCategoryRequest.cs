using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;
using System.ComponentModel.DataAnnotations.Schema;

namespace RoyalDragon.Admin.Features.CategoryFeather
{
    public class DeleteCategoryRequest : IRequest<ResultCustomModel<bool>>
    {
        public int CategoryId { get; set; }

        public class QueryHandler : IRequestHandler<DeleteCategoryRequest, ResultCustomModel<bool>>
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

            public async Task<ResultCustomModel<bool>> Handle(DeleteCategoryRequest request, CancellationToken cancellationToken)
            {
                var category = await _db.Category.FirstOrDefaultAsync(x => request.CategoryId == x.CategoryId);
                if (category == null)
                    return new ResultCustomModel<bool>
                    {
                        Code = 404,
                        Success = false,
                        Message = $"Không tìm thấy danh mục này",
                        Data = false
                    };
                var product = await _db.Product.FirstOrDefaultAsync(x => request.CategoryId == x.CategoryId);
                //Nếu sản phẩm đã bị xoá thì không tính
                if (product != null && product.IsActive == false)
                    return new ResultCustomModel<bool>
                    {
                        Code = 404,
                        Success = false,
                        Message = $"Sản phẩm {product.Name} đang tham chiếu tới danh mục này!",
                        Data = false
                    };
                category.IsActive = false;
                _db.Entry(category).State = EntityState.Modified;
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
