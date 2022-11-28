using MediatR;
using AutoMapper;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;
using System.Text.RegularExpressions;
using RoyalDragon.Admin.Models.Customer;

namespace RoyalDragon.Admin.Features.EcommerceFeature
{
    public class CreateOrderRespone : IRequest<ResultCustomModel<bool>>
    {
        public List<CreateOrderFromCustomerModel> ListProductOrder { get; set; }
        public int CustomerId { get; set; } = 0;
        public string NoteCustomer { get; set; } 
        public class QueryHandler : IRequestHandler<CreateOrderRespone, ResultCustomModel<bool>>
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
            public async Task<ResultCustomModel<bool>> Handle(CreateOrderRespone request, CancellationToken cancellationToken)
            {
                List<ProductOrder> ListProductOrder = new List<ProductOrder>();
                List<Product> ProductOrder = _db.Product.AsNoTracking().ToList();
                Order newOrder = new Order() { CustomerId = request.CustomerId, State = 0, Note = request.NoteCustomer, CreateOn = DateTime.Now, UserId = 5 };
                foreach (CreateOrderFromCustomerModel item in request.ListProductOrder)
                {
                    ListProductOrder.Add(new ProductOrder()
                    {
                        PriceInput = ProductOrder.FirstOrDefault(x => x.ProductId.Equals(item.ProductId)).PriceInput,
                        PriceOutput = ProductOrder.FirstOrDefault(x => x.ProductId.Equals(item.ProductId)).PriceInput,
                        Quantity = item.Quantity,
                        ProductId = item.ProductId,
                        OrderId = newOrder.OrderId
                    });
                }
                newOrder.ProductOrder = ListProductOrder;
                _db.Entry(newOrder).State = EntityState.Added;
                _db.ProductOrder.AddRange(ListProductOrder);
                int save = await _db.SaveChangesAsync();
                return new ResultCustomModel<bool>
                {
                    Code = save > 0 ? 200 : 400,
                    Message = save > 0 ? "Thành công" : "Có gì đó sai sai, vui lòng kiểm tra lại",
                    Success = save > 0,
                    Data = save > 0,
                };
            }
        }
    }
}
