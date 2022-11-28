using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Features.CategoryFeather;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;
using RoyalDragon.Common.Commons;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.RegularExpressions;

namespace RoyalDragon.Admin.Features.CustomerFeature
{
    public class CreateCustomerRequest : IRequest<ResultCustomModel<Customer>>
    {
        public Customer? Customer { get; set; }
        public int UserId { get; set; } = 0;
        public class QueryHandler : IRequestHandler<CreateCustomerRequest, ResultCustomModel<Customer>>
        {
            private readonly RoyalDragonDbContext _db;
            private readonly IMapper _mapper;
            private readonly IMediator _mediator;
            public QueryHandler (
                RoyalDragonDbContext db,
                IMapper mapper,
                IConfiguration configuration,
                IMediator mediator )
            {
                _db = db;
                _mapper = mapper;
                _mediator = mediator;
            }
            public class CommandValidator : AbstractValidator<CreateCustomerRequest>
            {
                public CommandValidator ( )
                {
                    RuleFor(m => m).NotNull().WithMessage("Thông tin khách hàng đang bị thiếu");
                    RuleFor(m => m.Customer.FullName).NotNull().NotEmpty().WithMessage("Tên khách hàng không được để trống");
                    RuleFor(m => m.Customer.Phone).NotNull().NotEmpty().WithMessage("Số điện thoại của khách hàng không được để trống");
                    RuleFor(m => m.Customer.Phone).MinimumLength(10).Matches(RegexCommon.ValidatePhoneNumberRegex).WithMessage("Yêu cầu nhập <b style='color:red;'>\"số điện thoại đúng định dạng\"</b>");
                    //RuleFor(m => m.Customer.Phone).Must(( entity, code, ctx ) =>
                    //{

                    //    return true;
                    //}).WithMessage("Số điện thoại này đã bị trùng");
                }
            } 
            public async Task<ResultCustomModel<Customer>> Handle ( CreateCustomerRequest request, CancellationToken cancellationToken )
            {
                var validate = await ValidateCustomerInputFormAsync(request);

                if (!validate.Success) return validate;
                request.Customer.CustomerId = 0;
                request.Customer.IsActive = true;
                request.Customer.CreateOn = DateTime.Now;
                request.Customer.IsBadCustomer = false;
                request.Customer.CreateByUserId = request.UserId;
                request.Customer.CreateBy = _db.User.Find(request.UserId).Fullname;
                _db.Entry(request.Customer).State = EntityState.Added;
                int save = await _db.SaveChangesAsync();
                return new ResultCustomModel<Customer>
                {
                    Code = save > 0 ? 200 : 400,
                    Message = save > 0 ? "Thành công" : "Có gì đó sai sai, vui lòng kiểm tra lại",
                    Success = save > 0,
                    Data = request.Customer,
                };
            }
            private async Task<ResultCustomModel<Customer>> ValidateCustomerInputFormAsync ( CreateCustomerRequest request )
            {
                if (request.Customer == null)
                {
                    return new ResultCustomModel<Customer>
                    {
                        Code = 400,
                        Message = "Lỗi : Đang thiếu thông tin khách hàng",
                        Success = false,
                        Data = request.Customer,
                    };
                }
                if (string.IsNullOrEmpty(request.Customer.FullName))
                {
                    return new ResultCustomModel<Customer>
                    {
                        Code = 400,
                        Message = "Lỗi : Tên khách hàng không được để trống",
                        Success = false,
                        Data = request.Customer,
                    };
                }

                if (string.IsNullOrEmpty(request.Customer.Phone))
                {
                    return new ResultCustomModel<Customer>
                    {
                        Code = 400,
                        Message = "Lỗi : Số điện thoại của khách hàng không được để trống",
                        Success = false,
                        Data = request.Customer,
                    };
                }
                Regex validatePhoneNumberRegex = new Regex(@"^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$");
                if (!validatePhoneNumberRegex.IsMatch(request.Customer.Phone))
                {
                    return new ResultCustomModel<Customer>
                    {
                        Code = 400,
                        Message = "Lỗi : Số điện thoại không đúng định dạng ",
                        Success = false,
                        Data = request.Customer,
                    };
                }

                if (_db.Customer.Any(x => x.IsActive && x.Phone.Equals(request.Customer.Phone)))
                {
                    return new ResultCustomModel<Customer>
                    {
                        Code = 400,
                        Message = "Lỗi : Số điện thoại này đã là của khách hàng khác",
                        Success = false,
                        Data = request.Customer,
                    };
                }
                if (string.IsNullOrEmpty(request.Customer.Address))
                {
                    return new ResultCustomModel<Customer>
                    {
                        Code = 400,
                        Message = "Lỗi : Địa chỉ khách hàng không được để trống",
                        Success = false,
                        Data = request.Customer,
                    };
                }
                return new ResultCustomModel<Customer>
                {
                    Code = 200,
                    Success = true
                };
            }
        }
        public class Profile : AutoMapper.Profile
        {
            public Profile ( )
            {
                //CreateMap<LauncherApplication, Result>();
            }
        }
    }
}
