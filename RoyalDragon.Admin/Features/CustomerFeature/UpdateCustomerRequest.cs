using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.RegularExpressions;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace RoyalDragon.Admin.Features.CustomerFeature
{
    public class UpdateCustomerRequest : IRequest<ResultCustomModel<bool>>
    {
        public Customer? Customer { get; set; }
        public int UserId { get; set; } = 0;
        public class QueryHandler : IRequestHandler<UpdateCustomerRequest, ResultCustomModel<bool>>
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
            public class CommandValidator : AbstractValidator<UpdateCustomerRequest>
            {
                public CommandValidator ( )
                {
                    RuleFor(m => m).NotNull();
                }
            }
            public async Task<ResultCustomModel<bool>> Handle ( UpdateCustomerRequest request, CancellationToken cancellationToken )
            {
                var validate = await ValidateCustomerInputFormAsync(request);
                if (!validate.Success) return validate;
                request.Customer.IsActive = true;
                _db.Entry(request.Customer).State = EntityState.Modified;
                int save = await _db.SaveChangesAsync();
                return new ResultCustomModel<bool>
                {
                    Code = save > 0 ? 200 : 400,
                    Message = save > 0 ? "Thành công" : "Có gì đó sai sai, vui lòng kiểm tra lại",
                    Success = save > 0,
                    Data = save > 0,
                };
            }
            private async Task<ResultCustomModel<bool>> ValidateCustomerInputFormAsync ( UpdateCustomerRequest request )
            {
                if (request.Customer == null)
                {
                    return new ResultCustomModel<bool>
                    {
                        Code = 400,
                        Message = "Lỗi : Đang thiếu thông tin khách hàng",
                        Success = false,
                    };
                }
                if (string.IsNullOrEmpty(request.Customer.FullName))
                {
                    return new ResultCustomModel<bool>
                    {
                        Code = 400,
                        Message = "Lỗi : Tên khách hàng không được để trống",
                        Success = false,
                    };
                }

                if (string.IsNullOrEmpty(request.Customer.Phone))
                {
                    return new ResultCustomModel<bool>
                    {
                        Code = 400,
                        Message = "Lỗi : Số điện thoại của khách hàng không được để trống",
                        Success = false,
                    };
                }
                Regex validatePhoneNumberRegex = new Regex(@"^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$");
                if (!validatePhoneNumberRegex.IsMatch(request.Customer.Phone))
                {
                    return new ResultCustomModel<bool>
                    {
                        Code = 400,
                        Message = "Lỗi : Số điện thoại không đúng định dạng ",
                        Success = false,
                    };
                }

                if (_db.Customer.Any(x => x.IsActive && x.CustomerId != request.Customer.CustomerId && x.Phone.Equals(request.Customer.Phone)))
                {
                    return new ResultCustomModel<bool>
                    {
                        Code = 400,
                        Message = "Lỗi : Số điện thoại này đã là của khách hàng khác",
                        Success = false,
                    };
                }
                if (string.IsNullOrEmpty(request.Customer.Address))
                {
                    return new ResultCustomModel<bool>
                    {
                        Code = 400,
                        Message = "Lỗi : Địa chỉ khách hàng không được để trống",
                        Success = false,
                    };
                }
                return new ResultCustomModel<bool>
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
                //CreateMap<UpdateCustomerRequest, Customer>()
                //    .ForMember(x=>x.AddressCustomer,mapper=> mapper.MapFrom(y=>y.Address))
                //    .ForMember(x=>x.IsActive,m=>m.Ignore())
                //    .ForMember(x=>x.IsActive,m=>m.MapFrom(y=>true));
            }
        }
    }
}
