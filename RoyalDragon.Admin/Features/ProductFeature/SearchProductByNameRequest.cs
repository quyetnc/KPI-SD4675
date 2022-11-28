using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;

namespace RoyalDragon.Admin.Features.ProductFeature
{
    public class SearchProductByNameRequest: IRequest<ResultCustomModel<List<Product>>>
    {
        public string NameRequest { get; set; }
        public class QueryHandler : IRequestHandler<SearchProductByNameRequest, ResultCustomModel<List<Product>>>
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

            public async Task<ResultCustomModel<List<Product>>> Handle(SearchProductByNameRequest request, CancellationToken cancellationToken)
            {
                if (string.IsNullOrEmpty(request.NameRequest))
                {
                    return new ResultCustomModel<List<Product>>
                    {
                        Code = 200,
                        Success = true,
                        Data = await _db.Product.ToListAsync(),
                        Message = "Ok"
                    };
                }    
                var data = await _db.Product.Where(x=>x.Name.Contains(request.NameRequest)).ToListAsync();
                return new ResultCustomModel<List<Product>>
                {
                    Code = 200,
                    Success = true,
                    Data = data,
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
}
