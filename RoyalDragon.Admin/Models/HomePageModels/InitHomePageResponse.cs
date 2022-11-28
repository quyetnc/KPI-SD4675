using RoyalDragon.Admin.Models.EcommerceModels;
using RoyalDragon.Admin.Models.Entities;

namespace RoyalDragon.Admin.Models.HomePageModels
{
    public class InitHomePageResponse
    {
        public IEnumerable<ProductCustom> Banner { get; set; }
        public IEnumerable<ProductCustom> Feather { get; set; }
        public IEnumerable<ProductCustom> SpecialOffer { get; set; }
        public IEnumerable<ProductCustom> Popular { get; set; }
        public IEnumerable<VListCategoryHomePage> ListCategory { get; set; }
        public IEnumerable<ConfigurationParameters> ListConfigurationParameters { get; set; }
    }
}
