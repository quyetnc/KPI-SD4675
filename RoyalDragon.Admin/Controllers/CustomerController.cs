using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using MediatR;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Features.CustomerFeature;
using RoyalDragon.Admin.Features.ProductFeature;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;
using RoyalDragon.Admin.Services;
using RoyalDragon.Admin.Utilities;

namespace RoyalDragon.Admin.Controllers
{
    public class CustomerController : BaseController
    {
        private readonly IExportServices _exportService;
        public CustomerController ( IMapper mapper, IMediator mediator, RoyalDragonDbContext db, IExportServices exportServices ) : base(mapper, mediator, db)
        {
            _exportService = exportServices;
        }

        [HttpGet, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<List<Customer>>> ListCustomer ( [FromQuery] ListCustomerRequest request )
        {
            var model = await _mediator.Send(request);
            return model;
        }

        [HttpGet, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<Customer>> GetCustomer ( [FromQuery] GetCustomerRequest request )
        {
            var model = await _mediator.Send(request);
            return model;
        }
        [HttpPost, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<bool>> UpdateCustomer ( [FromBody] UpdateCustomerRequest request )
        {
            var model = await _mediator.Send(request);
            return model;
        }
        [HttpPost, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<Customer>> CreateCustomer ( [FromBody] CreateCustomerRequest request )
        {
            request.UserId = User.GetUserId();
            var model = await _mediator.Send(request);
            return model;
        }
        [HttpDelete, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<bool>> DeleteCustomer ( [FromBody] DeleteCustomerRequest request )
        {
            var model = await _mediator.Send(request);
            return model;
        }
        [HttpPost, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<byte[]>> ExportExcelCustomer ( )
        {
            return _exportService.ExportExcelCustomer().Result;
        }
        [HttpPost, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<bool>> ImportCustomer ( [FromBody] ImportCustomerRequest request )
        {
            request.UserId = User.GetUserId();
            var model = await _mediator.Send(request);
            return model;
        }
        [HttpPost, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<bool>> CreateOrderFromCustomer ( [FromBody] CreateOrderFromCustomer request )
        {
            //request.UserId = User.GetUserId();
            var model = await _mediator.Send(request);
            return model;
        }
        [HttpPost, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<HistoryCallCustomer>> CreateHistoryCallCustomer( [FromBody] HistoryCallCustomerRequest request )
        {
            request.HistoryCallCustomer.UserId = User.GetUserId();
            request.HistoryCallCustomer.CreateOn = DateTime.Now;
            var model = await _mediator.Send(request);
            return model;
        }
        [HttpGet, MapToApiVersion("1.0")]
        public async Task<ResultCustomModel<List<HistoryCallCustomer>>> ListHistoryCallCustomer( [FromQuery] ListHistoryCallCustomerRequest request )
        {
            request.UserId= User.GetUserId();
            var model = await _mediator.Send(request);
            return model;
        }

    }
}
