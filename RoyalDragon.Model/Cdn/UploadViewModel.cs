using RoyalDragon.Model.Cdn.Entities;
using PagedList;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Common.Core;

namespace RoyalDragon.Model.Cdn
{
    /// <summary>
    /// Upload view model for upload list
    /// </summary>
    public class UploadViewModel
    {
        #region Properties

        public IPagedList<DocumentModel> DocumentModels { get; set; }

        public UploadSearchModel SearchModel { get; set; }

        #endregion

        #region Constructor
        public UploadViewModel(SMART_AmarisContext db, int page = 1)
        {
            DocumentModels = db.Document.AutoMap(page);
            SearchModel = new UploadSearchModel();
        }

        #endregion
    }
}