using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.EcommerceModels;
using RoyalDragon.Admin.Models.Entities;
using RoyalDragon.Admin.Utilities;

namespace RoyalDragon.Admin.Features.EcommerceFeature
{
    public class TrackingOrderRequest : IRequest<ResultCustomModel<TrackingOrderResponse>>
    {
        public int OrderId { get; set; }
        public string Phone { get; set; }
        public class QueryHandler : IRequestHandler<TrackingOrderRequest, ResultCustomModel<TrackingOrderResponse>>
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

            public async Task<ResultCustomModel<TrackingOrderResponse>> Handle(TrackingOrderRequest request, CancellationToken cancellationToken)
            {
                var order = await _db.Order
                                    .Include(x => x.Customer)
                                    .Where(x => x.OrderId == request.OrderId && x.Customer.Phone == request.Phone)
                                    .FirstOrDefaultAsync();
                if (order == null)
                {
                    return new ResultCustomModel<TrackingOrderResponse>
                    {
                        Code = 404,
                        Success = false,
                        Data = null,
                        Message = "Không tìm thấy đơn hàng mà bạn yêu cầu"
                    };
                }
                return new ResultCustomModel<TrackingOrderResponse>
                {
                    Code = 200,
                    Success = true,
                    Data = order.State.EnumToStateOrder(),
                    Message = "Ok"
                };
            }
        }
    }
}
