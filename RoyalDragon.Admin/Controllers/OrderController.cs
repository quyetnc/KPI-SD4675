using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Features.OrderFeature;
using RoyalDragon.Admin.Features.ProductFeature;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;
using RoyalDragon.Admin.Services;
using RoyalDragon.Admin.Utilities;

namespace RoyalDragon.Admin.Controllers
{
    public class OrderController : BaseController
    {
        public OrderController ( IMapper mapper, IMediator mediator, RoyalDragonDbContext db, IProductServices productServices ) : base(mapper, mediator, db)
        {

        }

        [HttpGet, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<List<VListOrder>>> ListOrder ( [FromQuery] ListOrderRequest request )
        {
            string role = User.GetUserRole();
            request.Role = role;
            var model = await _mediator.Send(request);
            return model;
        }
        [HttpGet, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<List<VListDetailOrder>>> DetailOrder ( [FromQuery] ListDetailOrderRequest request )
        {
            var model = await _mediator.Send(request);
            return model;
        }

        [HttpGet, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<Product>> GetProduct ( [FromQuery] GetProductRequest request )
        {
            var model = await _mediator.Send(request);
            return model;
        }
        [HttpPost, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<bool>> UpdateProduct ( [FromBody] UpdateProductRequest request )
        {
            request.UserId = User.GetUserId();
            var model = await _mediator.Send(request);
            return model;
        }
        [HttpPost, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<Product>> AddProduct ( [FromBody] AddProductRequest request )
        {
            request.UserId = User.GetUserId();
            var model = await _mediator.Send(request);
            return model;
        }
        [HttpPost, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<bool>> StopSellProduct ( [FromBody] StopSellProductRequest request )
        {
            var model = await _mediator.Send(request);
            return model;
        }
        [HttpDelete, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<bool>> DeleteProduct ( [FromBody] DeleteProductRequest request )
        {
            var model = await _mediator.Send(request);
            return model;
        }
        [HttpPost, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<List<VListOrder>>> GetListOrderOfCustomer ( [FromBody] GetListOrderOfCustomerRequest request )
        {
            var model = await _mediator.Send(request);
            return model;
        }

    }
}
