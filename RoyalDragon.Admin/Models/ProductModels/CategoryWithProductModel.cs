using RoyalDragon.Admin.Models.Entities;

namespace RoyalDragon.Admin.Models.ProductModels
{
    public class CategoryWithProductModel
    {
        public int CategoryId { get; set; }
        public string CategoryName { get; set; }
        public List<Product> ListProduct { get; set; }
    }
}
