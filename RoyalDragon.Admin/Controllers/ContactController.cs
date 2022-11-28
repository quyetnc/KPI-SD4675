using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Features.ContactFeature;
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
    public class ContactController : ControllerBase
    {
        public readonly IMapper _mapper;
        public readonly IMediator _mediator;
        public readonly RoyalDragonDbContext _db;
        public ContactController( IMapper mapper, IMediator mediator, RoyalDragonDbContext db )
        {
            _mapper = mapper;
            _mediator = mediator;
            _db = db;
        }
        [HttpPost, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<bool>> SendContact ( [FromBody] SendContactRequest request )
        {
            var model = await _mediator.Send(request);
            return model;
        }
    }
}
