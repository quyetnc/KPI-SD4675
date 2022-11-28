using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using RoyalDragon.Admin.Models.Entities;

namespace RoyalDragon.Admin.Controllers
{
    [Route("api/[controller]/[action]")]
    [ApiController]
    [Authorize(Roles ="Admin,Sale,Poached")]
    public abstract class BaseController : ControllerBase
    {
        public readonly IMapper _mapper;
        public readonly IMediator _mediator;
        public readonly RoyalDragonDbContext _db;
        public BaseController(IMapper mapper, IMediator mediator, RoyalDragonDbContext db)
        {
            _mapper=mapper; 
            _mediator=mediator;
            _db=db;
        }
    }
}
