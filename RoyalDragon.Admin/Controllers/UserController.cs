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
using RoyalDragon.Admin.Features.UserFeature;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;
using RoyalDragon.Admin.Services;
using RoyalDragon.Admin.Utilities;

namespace RoyalDragon.Admin.Controllers
{
    public class UserController : BaseController
    {
        private readonly IUserServices _userServices;

        public UserController(IMapper mapper, IMediator mediator, RoyalDragonDbContext db, IUserServices userServices) : base(mapper, mediator, db)
        {
            _userServices = userServices;
        }

        [HttpGet,MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<ListUserResponse>> ListUser([FromQuery] ListUserRequest request)
        {
            var model = await _mediator.Send(request);
            return model;
        }

        [HttpGet, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<User>> GetUser([FromQuery] GetUserRequest request)
        {
            var model = await _mediator.Send(request);
            return model;
        }
        [HttpPost, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<bool>> UpdateUser([FromBody] UpdateUserRequest request)
        {
            var model = await _mediator.Send(request);
            return model;
        }
        [HttpPost, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<User>> CreateUser([FromBody] CreateUserRequest request)
        {
            request.UserId = User.GetUserId();
            var model = await _mediator.Send(request);
            return model;
        }
        [HttpPost, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<string>> ResetPasswordUser([FromQuery] ResetPasswordRequest request)
        {
            var model = await _mediator.Send(request);
            return model;
        }
        [HttpPost, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<bool>> ChangePasswordUser([FromBody] ChangePasswordRequest request)
        {
            var model = await _mediator.Send(request);
            return model;
        }
        [HttpDelete, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<bool>> DisableUser([FromQuery] DisableUserRequest request)
        {
            var model = await _mediator.Send(request);
            return model;
        }
    }
}
