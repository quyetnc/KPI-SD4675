using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Features.CategoryFeather;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;
using RoyalDragon.Admin.Services;
using RoyalDragon.Admin.Utilities;

namespace RoyalDragon.Admin.Controllers
{
    public class CategoryController : BaseController
    {

        public CategoryController ( IMapper mapper, IMediator mediator, RoyalDragonDbContext db ) : base(mapper, mediator, db)
        {

        }

        [HttpGet, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<List<Category>>> ListCategory ( [FromQuery] ListCategoryRequest request )
        {
            var model = await _mediator.Send(request);
            return model;
        }
        [HttpGet, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<Category>> GetCategory ( [FromQuery] GetCategoryRequest request )
        {
            var model = await _mediator.Send(request);
            return model;
        }
        [HttpPost, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<bool>> UpdateCategory ( [FromBody] UpdateCategoryRequest request )
        {
            var model = await _mediator.Send(request);
            return model;
        }
        [HttpPost, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<Category>> CreateCategory ( [FromBody] CreateCategoryRequest request )
        {
            var model = await _mediator.Send(request);
            return model;
        }
        [HttpDelete, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<bool>> DeleteCategory ( [FromBody] DeleteCategoryRequest request )
        {
            var model = await _mediator.Send(request);
            return model;
        }
    }
}
