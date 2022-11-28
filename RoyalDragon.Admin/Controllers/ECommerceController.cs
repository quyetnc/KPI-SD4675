using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Features.EcommerceFeature;
using RoyalDragon.Admin.Features.InitHomePageFeature;
using RoyalDragon.Admin.Features.ProductFeature;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.EcommerceModels;
using RoyalDragon.Admin.Models.Entities;
using RoyalDragon.Admin.Models.HomePageModels;
using RoyalDragon.Admin.Models.ProductModels;
using RoyalDragon.Admin.Services;
using RoyalDragon.Admin.Utilities;

namespace RoyalDragon.Admin.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    public class ECommerceController : ControllerBase
    {
        public readonly IMapper _mapper;
        public readonly IMediator _mediator;
        public readonly RoyalDragonDbContext _db;
        public ECommerceController ( IMapper mapper, IMediator mediator, RoyalDragonDbContext db )
        {
            _mapper = mapper;
            _mediator = mediator;
            _db = db;
        }
        [HttpGet, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<List<Product>>> ListProduct ( [FromQuery] ListProductRequest request )
        {
            var model = await _mediator.Send(request);
            return model;
        }
        [HttpGet, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<ListProductByCategorySlugResult>> ListProductByCategorySlug ( [FromQuery] ListProductByCategorySlugRequest request )
        {
            var model = await _mediator.Send(request);
            return model;
        }
        [HttpGet, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<List<CategoryWithProductModel>>> ListCategoryWithProduct ( [FromQuery] ListCategoryWithProductRequest request )
        {
            var model = await _mediator.Send(request);
            return model;
        }
        [HttpGet, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<ProductDetailResponse>> ProductDetail ( [FromQuery] ProductDetailRequest request )
        {
            var model = await _mediator.Send(request);
            return model;
        }
        [HttpGet, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<InitHomePageResponse>> InitHomePage ( )
        {
            var model = await _mediator.Send(new InitHomePageRequest());
            return model;
        }
        [HttpGet, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<List<ListStaffResponse>>> ListStaff ( [FromQuery] ListStaff request )
        {
            var model = await _mediator.Send(request);
            return model;
        }
        [HttpPost, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<TrackingOrderResponse>> TrackingOrder ([FromBody] TrackingOrderRequest request )
        {
            var model = await _mediator.Send(request);
            return model;
        }
        [HttpGet, MapToApiVersion("1.0")]
        public ResultCustomModel<bool> IsLogin ( [FromQuery] ListStaff request )
        {
            return new ResultCustomModel<bool>
            {
                Success = User?.Identity?.IsAuthenticated ?? false,
                Message = "Yêu cầu đăng nhập"
            };
        }
        [HttpPost,MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<bool>> CreateOrderCustomer([FromBody] CreateOrderRespone request)
        {
            var model = await _mediator.Send(request);
            return model;
        }
    }
}
