using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;
using RoyalDragon.Admin.Models.ProductModels;

namespace RoyalDragon.Admin.Features.ProductFeature
{
    public class ListCategoryWithProductRequest : IRequest<ResultCustomModel<List<CategoryWithProductModel>>>
    {

        public class QueryHandler : IRequestHandler<ListCategoryWithProductRequest, ResultCustomModel<List<CategoryWithProductModel>>>
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

            public async Task<ResultCustomModel<List<CategoryWithProductModel>>> Handle ( ListCategoryWithProductRequest request, CancellationToken cancellationToken )
            {
                List<CategoryWithProductModel> result = new List<CategoryWithProductModel>();
                List<Category> lstCategories = await _db.Category.AsNoTracking().ToListAsync();
                List<Product> lstProducts = await _db.Product.AsNoTracking().ToListAsync();
                foreach (Category c in lstCategories)
                {
                    result.Add(new CategoryWithProductModel { CategoryId = c.CategoryId, CategoryName = c.Name, ListProduct = lstProducts.Where(x => x.CategoryId == c.CategoryId).ToList() });
                } 
                return new ResultCustomModel<List<CategoryWithProductModel>>
                {
                    Code = 200,
                    Success = true,
                    Data = result,
                    Message = "Ok"
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
