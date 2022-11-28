using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Features.CostFeature;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;
using RoyalDragon.Admin.Services;
using RoyalDragon.Admin.Utilities;

namespace RoyalDragon.Admin.Controllers
{
    public class CostController : BaseController
    {

        public CostController(IMapper mapper, IMediator mediator, RoyalDragonDbContext db) : base(mapper, mediator, db)
        {
        }

        [HttpGet,MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<List<VCost>>> ListCost([FromQuery] ListCostRequest request)
        {
            var model = await _mediator.Send(request);
            return model;
        }
        [HttpPost, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<bool>> UpdateCost([FromBody] UpdateCostRequest request)
        {
            request.Cost.UserId = User.GetUserId();
            var model = await _mediator.Send(request);
            return model;
        }
        [HttpGet, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<bool>> ApproveCost([FromQuery] ApproveCostRequest request)
        {
            request.UserId = User.GetUserId();
            var model = await _mediator.Send(request);
            return model;
        }
        [HttpPost, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<Cost>> CreateCost([FromBody] CreateCostRequest request)
        {
            request.Cost.UserId = User.GetUserId();
            var model = await _mediator.Send(request);
            return model;
        }
        [HttpDelete, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<bool>> DeleteCost([FromBody] DeleteCostRequest request)
        {
            var model = await _mediator.Send(request);
            return model;
        }
    }
}
