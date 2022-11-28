namespace RoyalDragon.Admin.Models.EcommerceModels
{
    public class ProductCustom
    {
        public int ProductId { get; set; }
        public string Name { get; set; }
        public int PriceOutput { get; set; }
        public string Img { get; set; }
        public int Quantity { get; set; }
        public short SaleOff { get; set; }
        public string BannerImg { get; set; }
        public string IntroduceBannerHtml { get; set; }
        public string Slug { get; set; }
        public double Star { get; set; }
    }
}
