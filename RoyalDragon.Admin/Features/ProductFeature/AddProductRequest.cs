using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;
using System.ComponentModel.DataAnnotations.Schema;

namespace RoyalDragon.Admin.Features.ProductFeature
{
    public class AddProductRequest : IRequest<ResultCustomModel<Product>>
    {
        public Product? Product { get; set; }
        public int UserId { get; set; } = 0;
        public class QueryHandler : IRequestHandler<AddProductRequest, ResultCustomModel<Product>>
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

            public async Task<ResultCustomModel<Product>> Handle(AddProductRequest request, CancellationToken cancellationToken)
            {
                if (request.Product.CategoryId == null)
                {
                    return new ResultCustomModel<Product>
                    {
                        Code = 400,
                        Message = "Yêu cầu chọn danh mục",
                        Success = false,
                        Data = request.Product,
                    };
                }
                if (!_db.Category.Any(x => x.CategoryId == request.Product.CategoryId))
                {
                    return new ResultCustomModel<Product>
                    {
                        Code = 400,
                        Message = "Không tìm thấy danh mục này trong hệ thống",
                        Success = false,
                        Data = request.Product,
                    };
                }
                request.Product.IsActive = true;
                _db.Entry(request.Product).State = EntityState.Added;
                Inventory inventory = new Inventory();
                inventory.ProductId = request.Product.ProductId;
                inventory.SaleOff = request.Product.SaleOff;
                inventory.IsActive = true;
                inventory.CreateOn = DateTime.Now;
                inventory.Quantity = request.Product.Quantity;
                inventory.Product=request.Product;
                _db.Entry(inventory).State = EntityState.Added;
               int save = await _db.SaveChangesAsync();
                return new ResultCustomModel<Product>
                {
                    Code = save > 1 ? 200 : 400,
                    Message = save > 1 ? "Thành công" : "Có gì đó sai sai, vui lòng kiểm tra lại",
                    Success = save > 1,
                    Data = request.Product,
                };
            }
        }
        public class Profile : AutoMapper.Profile
        {
            public Profile()
            {
                //CreateMap<CreateProductModel, Product>()
                //    .ForMember(x=);
            }
        }
    }

}
