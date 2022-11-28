using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;
using RoyalDragon.Common.Commons;
using System.Text.RegularExpressions;

namespace RoyalDragon.Admin.Features.CustomerFeature
{
    public class HistoryCallCustomerRequest : IRequest<ResultCustomModel<HistoryCallCustomer>>
    {
        public HistoryCallCustomer? HistoryCallCustomer { get; set; }
        public class QueryHandler : IRequestHandler<HistoryCallCustomerRequest, ResultCustomModel<HistoryCallCustomer>>
        {
            private readonly RoyalDragonDbContext _db;
            private readonly IMapper _mapper;
            private readonly IMediator _mediator;
            public QueryHandler(
                RoyalDragonDbContext db,
                IMapper mapper,
                IConfiguration configuration,
                IMediator mediator)
            {
                _db = db;
                _mapper = mapper;
                _mediator = mediator;
            }
            public class CommandValidator : AbstractValidator<HistoryCallCustomerRequest>
            {
                public CommandValidator()
                {
                    RuleFor(m => m.HistoryCallCustomer.CustomerId).GreaterThan(0).WithMessage("Không tìm thấy mã khách hàng");
                    RuleFor(m => m.HistoryCallCustomer.Note).NotEmpty().WithMessage("Ghi chú không được để trống");
                }
            }
            public async Task<ResultCustomModel<HistoryCallCustomer>> Handle(HistoryCallCustomerRequest request, CancellationToken cancellationToken)
            {
                _db.Entry(request.HistoryCallCustomer).State = EntityState.Added;
                int save = await _db.SaveChangesAsync();
                return new ResultCustomModel<HistoryCallCustomer>
                {
                    Code = save > 0 ? 200 : 400,
                    Message = save > 0 ? "Thành công" : "Có gì đó sai sai, vui lòng kiểm tra lại",
                    Success = save > 0,
                    Data = request.HistoryCallCustomer,
                };
            }
        }
    }
}
