using RoyalDragon.Model.Cdn.Entities;

namespace RoyalDragon.Cdn.Utilities
{
    public static class EntitiesExtension
    {
        public static IEnumerable<Category> GetCategoryList(this SMART_AmarisContext db, int id = 0)
        {
            return db.Category
                .Where(p => (!p.IsDisabled) && (id == 0 || p.CategoryId == id))
                .OrderBy(x => x.Label).ToList();
        }
        public static IEnumerable<CmdbParentBusinessServices> GetApplications(this SMART_AmarisContext db, int id = 0, string query = "")
        {
            return db.CmdbParentBusinessServices
                .Where(a => ((id == 0 || a.ParentBusinessServiceId == id) && (query == "" || a.Description.ToLower().Contains(query))))
                .OrderBy(x => x.Description)
                .ToList();
        }
    }
}
