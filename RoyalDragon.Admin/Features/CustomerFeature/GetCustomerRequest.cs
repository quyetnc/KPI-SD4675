using AutoMapper;
using MediatR;
using Microsoft.CodeAnalysis;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;
using System.ComponentModel.DataAnnotations.Schema;

namespace RoyalDragon.Admin.Features.CustomerFeature
{
    public class GetCustomerRequest : IRequest<ResultCustomModel<Customer>>
    {
        public int CustomerId { get; set; } = 0;

        public class QueryHandler : IRequestHandler<GetCustomerRequest, ResultCustomModel<Customer>>
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

            public async Task<ResultCustomModel<Customer>> Handle(GetCustomerRequest request, CancellationToken cancellationToken)
            {
                var data = await _db.Customer.FirstOrDefaultAsync(x => x.CustomerId == request.CustomerId);
                return new ResultCustomModel<Customer>
                {
                    Code = data != null ? 200 : 404,
                    Success = data != null,
                    Message = data != null ? "Ok" : "Không tìm thấy sản phẩm",
                    Data = data
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
