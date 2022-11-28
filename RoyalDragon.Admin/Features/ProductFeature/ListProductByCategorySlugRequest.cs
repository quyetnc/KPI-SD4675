using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;
using RoyalDragon.Admin.Models.ProductModels;

namespace RoyalDragon.Admin.Features.ProductFeature
{
    public class ListProductByCategorySlugRequest : IRequest<ResultCustomModel<ListProductByCategorySlugResult>>
    {
        public string CategorySlug { get; set; }
        public class QueryHandler : IRequestHandler<ListProductByCategorySlugRequest, ResultCustomModel<ListProductByCategorySlugResult>>
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

            public async Task<ResultCustomModel<ListProductByCategorySlugResult>> Handle ( ListProductByCategorySlugRequest request, CancellationToken cancellationToken )
            {
                Category category = _db.Category.FirstOrDefault(x => x.Slug.Equals(request.CategorySlug));
                if (category == null)
                {
                    return new ResultCustomModel<ListProductByCategorySlugResult>
                    {
                        Code = 404,
                        Success = false,
                        Data = null,
                        Message = "Ok"
                    };
                }
                List<Product> data = await _db.Product.Where(x => x.CategoryId == category.CategoryId).ToListAsync();
                ListProductByCategorySlugResult rs = new ListProductByCategorySlugResult() { CategoryId = category.CategoryId, ListProduct = data, CategoryName = category.Name };
                return new ResultCustomModel<ListProductByCategorySlugResult>
                {
                    Code = 200,
                    Success = true,
                    Data = rs,
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
