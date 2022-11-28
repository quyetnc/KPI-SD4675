using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Features.ContactFeature;
using RoyalDragon.Admin.Features.ProductFeature;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;
using RoyalDragon.Common.Commons;

namespace RoyalDragon.Admin.Features.ReviewFeature
{
    public class CreateReviewRequest : IRequest<ResultCustomModel<VReview>>
    {
        public Review Review { get; set; }
        public class QueryHandler : IRequestHandler<CreateReviewRequest, ResultCustomModel<VReview>>
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
            public class CommandValidator : AbstractValidator<CreateReviewRequest>
            {
                public CommandValidator()
                {
                    RuleFor(m => m.Review.Comment).NotNull();
                    RuleFor(m => m.Review.Star).Must(r => r >= 1 && r <= 5);
                    RuleFor(m => m.Review.ProductId).GreaterThan(1);
                }
            }
            public async Task<ResultCustomModel<VReview>> Handle(CreateReviewRequest request, CancellationToken cancellationToken)
            {
                request.Review.CreateOn = DateTime.Now;
                request.Review.IsActive = true;
                //Check xem đã mua sản phẩm này chưa
                var isBuyProduct = await _db.ProductOrder
                                            .Include(x => x.Order)
                                            .Where(x => x.Order.CustomerId == request.Review.CustomerId
                                                            && x.ProductId == request.Review.ProductId)
                                            .AnyAsync();
                //Nếu chưa mua sản phẩm
                if (!isBuyProduct)
                {
                    return new ResultCustomModel<VReview>
                    {
                        Code = 200,
                        Success = false,
                        Data = null,
                        Message = "Bạn phải mua sản phẩm này để tiếp tục đánh giá!"
                    };
                }
                //Check xem đã review sản phẩm này chưa
                var isReviewed = await _db.Review.AnyAsync(x => x.CustomerId == request.Review.CustomerId && x.ProductId == request.Review.ProductId);
                if (isReviewed)
                {
                    return new ResultCustomModel<VReview>
                    {
                        Code = 200,
                        Success = false,
                        Data = null,
                        Message = "Bạn đã đánh giá sản phẩm này rồi!"
                    };
                }
                _db.Entry(request.Review).State = EntityState.Added;
                int save = await _db.SaveChangesAsync();
                var data = await _db.VReview.FirstOrDefaultAsync(x=>x.ReviewId==request.Review.ReviewId);
                return new ResultCustomModel<VReview>
                {
                    Code = save > 0 ? 200 : 400,
                    Success = save > 0,
                    Data = data,
                    Message = save > 0 ? "Ok" : "Có lỗi trong quá trình đánh giá, vui lòng thử lại sau"
                };
            }
        }
        public class Profile : AutoMapper.Profile
        {
            public Profile()
            {
                //CreateMap<LauncherApplication, Result>();
            }
        }
    }
}
