using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;

namespace RoyalDragon.Admin.Features.OrderFeature
{
    public class GetListOrderOfCustomerRequest : IRequest<ResultCustomModel<List<VListOrder>>>
    {
        public int CustomerId { get; set; } 

        public class QueryHandler : IRequestHandler<GetListOrderOfCustomerRequest, ResultCustomModel<List<VListOrder>>>
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

            public async Task<ResultCustomModel<List<VListOrder>>> Handle ( GetListOrderOfCustomerRequest request, CancellationToken cancellationToken )
            {
                IQueryable<VListOrder> query; 
                    query = _db.VListOrder.Where(x => x.CustomerId == request.CustomerId);
                var data = await query.ToListAsync();
                return new ResultCustomModel<List<VListOrder>>
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
            public Profile ( )
            {
                //CreateMap<LauncherApplication, Result>();
            }
        }
    }
}
