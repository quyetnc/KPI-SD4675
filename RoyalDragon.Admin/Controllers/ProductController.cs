using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Features.ProductFeature;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;
using RoyalDragon.Admin.Services;
using RoyalDragon.Admin.Utilities;

namespace RoyalDragon.Admin.Controllers
{
    public class ProductController : BaseController
    {
        private readonly IProductServices _productServices;

        public ProductController(IMapper mapper, IMediator mediator, RoyalDragonDbContext db, IProductServices productServices) : base(mapper, mediator, db)
        {
            _productServices = productServices;
        }

        [HttpGet,MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<List<Product>>> ListProduct([FromQuery] ListProductRequest request)
        {
            var model = await _mediator.Send(request);
            return model;
        }
        [HttpGet,MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<List<ProductHistory>>> HistoryUpdateProduct([FromQuery] HistoryUpdateProductRequest request)
        {
            var model = await _mediator.Send(request);
            return model;
        }

        [HttpGet, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<Product>> GetProduct([FromQuery] GetProductRequest request)
        {
            var model = await _mediator.Send(request);
            return model;
        }
        [HttpPost, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<bool>> UpdateProduct([FromBody] UpdateProductRequest request)
        {
            request.UserId = User.GetUserId();
            var model = await _mediator.Send(request);
            return model;
        }
        [HttpPost, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<Product>> AddProduct([FromBody] AddProductRequest request)
        {
            request.UserId = User.GetUserId();
            var model = await _mediator.Send(request);
            return model;
        }
        [HttpPost, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<bool>> StopSellProduct([FromBody] StopSellProductRequest request)
        {
            var model = await _mediator.Send(request);
            return model;
        }
        [HttpDelete, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<bool>> DeleteProduct([FromBody] DeleteProductRequest request)
        {
            var model = await _mediator.Send(request);
            return model;
        }
        [HttpPost, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<List<Product>>> SearchProductByName([FromBody] SearchProductByNameRequest request)
        {
            var model = await _mediator.Send(request);
            return model;
        }
        [HttpPost, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<bool>> UpdateSettingProduct ( [FromBody] UpdateSettingProductRequest request )
        {
            request.UserId = User.GetUserId();
            var model = await _mediator.Send(request);
            return model;
        }
    }
}
