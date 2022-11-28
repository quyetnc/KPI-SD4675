using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;
using System.ComponentModel.DataAnnotations.Schema;

namespace RoyalDragon.Admin.Features.ProductFeature
{
    public class ListDetailOrderRequest : IRequest<ResultCustomModel<List<VListDetailOrder>>>
    {
        public int OrderId { get; set; }

        public class QueryHandler : IRequestHandler<ListDetailOrderRequest, ResultCustomModel<List<VListDetailOrder>>>
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

            public async Task<ResultCustomModel<List<VListDetailOrder>>> Handle(ListDetailOrderRequest request, CancellationToken cancellationToken)
            {
                var data = await _db.VListDetailOrder.Where(x => x.OrderId == request.OrderId).ToListAsync();
                return new ResultCustomModel<List<VListDetailOrder>>
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
