using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Features.CustomerFeature;
using RoyalDragon.Admin.Features.EcommerceFeature;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.EcommerceModels;
using RoyalDragon.Admin.Models.Entities;
using RoyalDragon.Admin.Utilities;
using RoyalDragon.Common.Commons;

namespace RoyalDragon.Admin.Features.ContactFeature
{
    public class SendContactRequest : IRequest<ResultCustomModel<bool>>
    {
        public Contact Contact { get; set; }
        public class QueryHandler : IRequestHandler<SendContactRequest, ResultCustomModel<bool>>
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
            public class CommandValidator : AbstractValidator<SendContactRequest>
            {
                public CommandValidator()
                {
                    RuleFor(m => m.Contact.Message).NotNull();
                    RuleFor(m => m.Contact.Title).NotNull();
                    RuleFor(m => m.Contact.Name).NotNull();
                    RuleFor(m => m.Contact.Phone).MinimumLength(10).Matches(RegexCommon.ValidatePhoneNumberRegex).WithMessage("Yêu cầu nhập <b style='color:red;'>\"số điện thoại đúng định dạng\"</b>");
                }
            }
            public async Task<ResultCustomModel<bool>> Handle(SendContactRequest request, CancellationToken cancellationToken)
            {
                var contact = await _db.Contact.AsNoTracking().FirstOrDefaultAsync(x => x.Phone == request.Contact.Phone);
                if (contact != null)
                {
                    return new ResultCustomModel<bool>
                    {
                        Code = 400,
                        Success = false,
                        Data = false,
                        Message = "Chúng tôi đã nhận được thông tin liên hệ của bạn trước đó rồi nè."
                    };
                }
                request.Contact.CreateOn = DateTime.Now;
                _db.Entry(request.Contact).State = EntityState.Added;
                int save = await _db.SaveChangesAsync();
                return new ResultCustomModel<bool>
                {
                    Code = save > 0 ? 200 : 400,
                    Success = save > 0,
                    Data = save > 0,
                    Message = save > 0 ? "Chúng tôi đã nhận được thông tin từ bạn! Sẽ liên hệ bạn sớm nhất ạ." : "Thất bại"
                };
            }
        }
    }
}
