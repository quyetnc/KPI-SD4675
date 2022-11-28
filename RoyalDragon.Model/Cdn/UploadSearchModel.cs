using System.Collections.Generic;

namespace RoyalDragon.Model.Cdn
{
    /// <summary>
    /// Search view model for upload list
    /// </summary>
    public class UploadSearchModel
    {
        public string Label { get; set; }

        public List<int> CategoryIdList { get; set; }

        public List<int> ApplicationIdList { get; set; }

        public string Extension { get; set; }

        public int? CreatedById { get; set; }
        public int Page { get; set; }

        public int? UpdatedById { get; set; }

        public List<Select2Item> CategoryList { get; set; }

        public List<Select2Item> ApplicationList { get; set; }
        
    }
}