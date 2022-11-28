using AutoMapper;
using FluentValidation;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;
using RoyalDragon.Admin.Models.ProductModels;

namespace RoyalDragon.Admin.Features.ProductFeature
{
    public class UpdateSettingProductRequest : IRequest<ResultCustomModel<bool>>
    {
        public UpdateSettingProductRequestModel ProductSetting { get; set; }
        public int UserId { get; set; } = 0;
        public class QueryHandler : IRequestHandler<UpdateSettingProductRequest, ResultCustomModel<bool>>
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
            public class CommandValidator : AbstractValidator<UpdateSettingProductRequest>
            {
                public CommandValidator ( )
                {
                    RuleFor(m => m.ProductSetting).NotNull().WithMessage("Thông tin cập nhật thiếu");
                    RuleFor(m => m.ProductSetting.ProductId).NotNull().WithMessage("Thiếu mã sản phẩm");
                    When(m => m.ProductSetting.IsBanner, ( ) =>
                    {
                        RuleFor(product => product.ProductSetting.BannerImg).NotNull().WithMessage("Yêu cầu phải có hình ảnh cho Banner").NotEmpty().WithMessage("Yêu cầu phải có hình ảnh cho Banner");
                    });

                }
            }
            public async Task<ResultCustomModel<bool>> Handle ( UpdateSettingProductRequest request, CancellationToken cancellationToken )
            {
                Product productExist = await _db.Product.FirstOrDefaultAsync(x => x.ProductId == request.ProductSetting.ProductId);
                productExist.IsBanner = request.ProductSetting.IsBanner;
                productExist.BannerImg = request.ProductSetting.BannerImg;
                productExist.IsPopular = request.ProductSetting.IsPopular;
                productExist.IsFeather = request.ProductSetting.IsFeather;
                productExist.IsSpecialOffer = request.ProductSetting.IsSpecialOffer;
                _db.Entry(productExist).State = EntityState.Modified;
                //#region Lưu lịch sử Update
                //ProductHistory history = new ProductHistory();
                //history.ProductId = productExist.ProductId;
                //history.CreateByUserId = request.UserId;
                //history.CreateBy = await _db.User.Where(x => x.UserId == request.UserId).Select(x => x.Fullname).FirstOrDefaultAsync();
                //history.PriceOutput = productExist.PriceOutput;
                //history.PriceInput = productExist.PriceInput;
                //history.SaleOff = productExist.SaleOff;
                //history.CreateOn = DateTime.Now;
                //_db.Entry(history).State = EntityState.Added;
                //#endregion
                int save = await _db.SaveChangesAsync();
                return new ResultCustomModel<bool>
                {
                    Code = save > 0 ? 200 : 400,
                    Message = save > 0 ? "Thành công" : "Có gì đó sai sai, vui lòng kiểm tra lại",
                    Success = save > 0,
                    Data = save > 0,
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
