using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;

namespace RoyalDragon.Admin.Features.ReviewFeature
{
    public class ShowReviewRequest : IRequest<ResultCustomModel<bool>>
    {
        public bool IsLogin { get; set; }
        public int CustomerId { get; set; }
        public int ProductId { get; set; }
        public class QueryHandler : IRequestHandler<ShowReviewRequest, ResultCustomModel<bool>>
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
            public async Task<ResultCustomModel<bool>> Handle(ShowReviewRequest request, CancellationToken cancellationToken)
            {
                if (!request.IsLogin)
                {
                    return new ResultCustomModel<bool>
                    {
                        Code = 200,
                        Success = false,
                        Data = false,
                        Message = "Bạn phải đăng nhập tiếp tục đánh giá!"
                    };
                }
                //Check xem đã mua sản phẩm này chưa
                var isBuyProduct = await _db.ProductOrder
                                            .Include(x => x.Order)
                                            .Where(x => x.Order.CustomerId == request.CustomerId
                                                            && x.ProductId == request.ProductId)
                                            .AnyAsync();
                //Nếu chưa mua sản phẩm
                if (!isBuyProduct)
                {
                    return new ResultCustomModel<bool>
                    {
                        Code = 200,
                        Success = false,
                        Data = false,
                        Message = "Bạn phải mua sản phẩm này để tiếp tục đánh giá!"
                    };
                }
                //Check xem đã review sản phẩm này chưa
                var isReviewed = await _db.Review.AnyAsync(x => x.CustomerId == request.CustomerId && x.ProductId == request.ProductId);
                if (isReviewed)
                {
                    return new ResultCustomModel<bool>
                    {
                        Code = 200,
                        Success = false,
                        Data = false,
                        Message = "Bạn đã đánh giá sản phẩm này rồi!"
                    };
                }
                return new ResultCustomModel<bool>
                {
                    Code = 200 ,
                    Success = true,
                    Data = true,
                    Message =  "Ok"
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
