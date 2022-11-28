using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;
using System.ComponentModel.DataAnnotations.Schema;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory.Database;

namespace RoyalDragon.Admin.Features.ProductFeature
{
    public class UpdateProductRequest : IRequest<ResultCustomModel<bool>>
    {
        public Product? Product { get; set; }
        public int UserId { get; set; } = 0;
        public class QueryHandler : IRequestHandler<UpdateProductRequest, ResultCustomModel<bool>>
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
            public class CommandValidator : AbstractValidator<UpdateProductRequest>
            {
                public CommandValidator ( )
                {
                    //RuleFor(m => m.UserId)
                    //    .GreaterThan(0);
                    RuleFor(m => m).NotNull();
                }
            }
            public async Task<ResultCustomModel<bool>> Handle ( UpdateProductRequest request, CancellationToken cancellationToken )
            {
                Product productExist = await _db.Product.AsNoTracking().FirstOrDefaultAsync(x => x.ProductId == request.Product.ProductId);
                if (request.Product.CategoryId == null)
                {
                    return new ResultCustomModel<bool>
                    {
                        Code = 400,
                        Message = "Yêu cầu chọn danh mục",
                        Success = false,
                        Data = false,
                    };
                }
                if (!_db.Category.Any(x => x.CategoryId == request.Product.CategoryId))
                {
                    return new ResultCustomModel<bool>
                    {
                        Code = 400,
                        Message = "Không tìm thấy danh mục này trong hệ thống",
                        Success = false,
                        Data = false,
                    };
                }
                request.Product.IsActive = true;
                request.Product.IsBanner = productExist.IsBanner;
                request.Product.BannerImg = productExist.BannerImg;
                request.Product.IsFeather = productExist.IsFeather;
                request.Product.IsSpecialOffer = productExist.IsSpecialOffer;
                request.Product.IsPopular = productExist.IsPopular;
                _db.Entry(request.Product).State = EntityState.Modified;
                #region Lưu lịch sử Update
                ProductHistory history = new ProductHistory();
                history.ProductId = request.Product.ProductId;
                history.CreateByUserId = request.UserId;
                history.CreateBy = await _db.User.Where(x => x.UserId == request.UserId).Select(x => x.Fullname).FirstOrDefaultAsync();
                history.PriceOutput = request.Product.PriceOutput;
                history.PriceInput = request.Product.PriceInput;
                history.SaleOff = request.Product.SaleOff;
                history.CreateOn = DateTime.Now;
                _db.Entry(history).State = EntityState.Added;
                #endregion
                int save = await _db.SaveChangesAsync();
                return new ResultCustomModel<bool>
                {
                    Code = save > 1 ? 200 : 400,
                    Message = save > 1 ? "Thành công" : "Có gì đó sai sai, vui lòng kiểm tra lại",
                    Success = save > 1,
                    Data = save > 1,
                };
            }
        }
        public class Profile : AutoMapper.Profile
        {
            //public Profile ( )
            //{
            //    CreateMap<LauncherApplication, Result>();
            //}
        }
    }
}
