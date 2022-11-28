using Microsoft.Build.Framework;

namespace RoyalDragon.Admin.Models.ProductModels
{
    public class UpdateSettingProductRequestModel
    {
        [Required]
        public int ProductId { get; set; }
        [Required]
        public bool IsBanner { get; set; }
        [Required]
        public bool IsFeather { get; set; }
        [Required]
        public bool IsSpecialOffer { get; set; }
        [Required]
        public bool IsPopular { get; set; }
        public string? BannerImg { get; set; }
    }
}
