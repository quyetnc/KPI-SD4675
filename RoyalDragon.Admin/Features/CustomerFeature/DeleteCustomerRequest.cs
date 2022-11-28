using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;
using System.ComponentModel.DataAnnotations.Schema;

namespace RoyalDragon.Admin.Features.CustomerFeature
{
    public class DeleteCustomerRequest : IRequest<ResultCustomModel<bool>>
    {
        public List<int> ListCustomerId { get; set; }

        public class QueryHandler : IRequestHandler<DeleteCustomerRequest, ResultCustomModel<bool>>
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

            public async Task<ResultCustomModel<bool>> Handle ( DeleteCustomerRequest request, CancellationToken cancellationToken )
            {
                var lstCustomer = await _db.Customer.Where(x => request.ListCustomerId.Contains(x.CustomerId)).ToListAsync();
                if (!lstCustomer.Any())
                    return new ResultCustomModel<bool>
                    {
                        Code = 404,
                        Success = false,
                        Message = "Không tìm thấy khách hàng",
                        Data = false
                    };
                //Check if order is reference to Product
                //var order = await _db.ProductOrder.Include(x => x.Order).FirstOrDefaultAsync(x => x.Order.State == 0 && request.ListCustomerId.Contains(x.));
                //if (order != null)
                //    return new ResultCustomModel<bool>
                //    {
                //        Code = 400,
                //        Success = false,
                //        Message = $"Không thể xoá do {order.OrderId} đang tham chiếu tới sản phẩm này",
                //        Data = false
                //    };
                lstCustomer.ForEach(customer =>
                {
                    customer.IsActive = false;
                    _db.Entry(customer).State = EntityState.Modified;
                });
                int save = await _db.SaveChangesAsync();
                return new ResultCustomModel<bool>
                {
                    Code = save > 0 ? 200 : 400,
                    Success = save > 0,
                    Data = save > 0,
                    Message = save > 0 ? "Thành công" : "Thất bại"
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
