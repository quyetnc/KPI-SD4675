using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;

namespace RoyalDragon.Admin.Features.CustomerFeature
{
    public class ListHistoryCallCustomerRequest : IRequest<ResultCustomModel<List<HistoryCallCustomer>>>
    {
        public int CustomerId { get; set; }
        public int UserId { get; set; }

        public class QueryHandler : IRequestHandler<ListHistoryCallCustomerRequest, ResultCustomModel<List<HistoryCallCustomer>>>
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

            public async Task<ResultCustomModel<List<HistoryCallCustomer>>> Handle(ListHistoryCallCustomerRequest request, CancellationToken cancellationToken)
            {
                var data = await _db.HistoryCallCustomer.Include(x=>x.User).Where(x => x.CustomerId==request.CustomerId&&x.UserId==request.UserId).ToListAsync();
                return new ResultCustomModel<List<HistoryCallCustomer>>
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
