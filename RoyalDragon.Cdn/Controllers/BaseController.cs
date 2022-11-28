using AutoMapper;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace RoyalDragon.Cdn.Controllers
{
    [Authorize]
    public abstract class BaseController : Controller
    {
        public readonly IMapper _mapper;
        public BaseController(IMapper mapper)
        {
            _mapper=mapper; 
        }
    }
}
