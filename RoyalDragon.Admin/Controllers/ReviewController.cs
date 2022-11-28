using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Features.EcommerceFeature;
using RoyalDragon.Admin.Features.InitHomePageFeature;
using RoyalDragon.Admin.Features.ProductFeature;
using RoyalDragon.Admin.Features.ReviewFeature;
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
    public class ReviewController : ControllerBase
    {
        public readonly IMapper _mapper;
        public readonly IMediator _mediator;
        public readonly RoyalDragonDbContext _db;
        public ReviewController(IMapper mapper, IMediator mediator, RoyalDragonDbContext db)
        {
            _mapper = mapper;
            _mediator = mediator;
            _db = db;
        }
        [Authorize(Roles = "Customer,Admin")]
        [HttpPost, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<VReview>> CreateReview([FromBody] CreateReviewRequest request)
        {
            request.Review.CustomerId =User.GetUserId();
            var model = await _mediator.Send(request);
            return model;
        }
        /// <summary>
        /// Kiểm tra có hợp lệ để hiển thị Review (Đã đăng nhập, đã mua sản phẩm và chưa đánh giá)
        /// </summary>
        /// <param name="request"></param>
        /// <returns></returns>
        [HttpPost, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<bool>> ShowReview([FromBody] ShowReviewRequest request)
        {
            request.IsLogin = User?.Identity?.IsAuthenticated ?? false;
            request.CustomerId = request.IsLogin ? User.GetUserId() : 0;
            var model = await _mediator.Send(request);
            return model;
        }
    }
}
