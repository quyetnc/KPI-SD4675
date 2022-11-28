using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Nethereum.RPC.Eth.Blocks;
using RoyalDragon.Admin.Models.Customer;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;
using System.Text.RegularExpressions;

namespace RoyalDragon.Admin.Features.CustomerFeature
{
    public class CreateOrderFromCustomer : IRequest<ResultCustomModel<bool>>
    {
        public List<CreateOrderFromCustomerModel> ListProductOrder { get; set; }
        public int UserId { get; set; } = 0;
        public int CustomerId { get; set; } = 0;
        public string NoteCustomer { get; set; }
        public class QueryHandler : IRequestHandler<CreateOrderFromCustomer, ResultCustomModel<bool>>
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

            public async Task<ResultCustomModel<bool>> Handle ( CreateOrderFromCustomer request, CancellationToken cancellationToken )
            {
                List<ProductOrder> LstProductsOrder = new List<ProductOrder>();
                List<Product> LstProducts = _db.Product.AsNoTracking().ToList();

                Order newOrder = new Order() { CustomerId = request.CustomerId, State = 0, Note = request.NoteCustomer, CreateOn = DateTime.Now, UserId = request.UserId };
                foreach (CreateOrderFromCustomerModel item in request.ListProductOrder)
                {
                    LstProductsOrder.Add(new ProductOrder()
                    {
                        PriceInput = LstProducts.FirstOrDefault(x => x.ProductId.Equals(item.ProductId)).PriceInput,
                        PriceOutput = LstProducts.FirstOrDefault(x => x.ProductId.Equals(item.ProductId)).PriceInput,
                        Quantity = item.Quantity,
                        ProductId = item.ProductId,
                        OrderId = newOrder.OrderId
                    });
                }
                newOrder.ProductOrder = LstProductsOrder;

                _db.Entry(newOrder).State = EntityState.Added;
                _db.ProductOrder.AddRange(LstProductsOrder);
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
