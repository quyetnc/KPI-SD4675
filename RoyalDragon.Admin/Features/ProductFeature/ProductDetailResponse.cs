using RoyalDragon.Admin.Models.Entities;

namespace RoyalDragon.Admin.Features.ProductFeature
{
    public class ProductDetailResponse
    {
        public VProductDetail ProductDetail { get; set; }
        public IEnumerable<VReview> Reviews { get; set; }
    }
}
