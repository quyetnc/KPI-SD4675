using System;

namespace RoyalDragon.Model.Cdn
{
    public class CategoryViewModel
    {
        public int CategoryId { get; set; }
        public string Label { get; set; }
        public int NbrDocuments { get; set; }
        public DateTime CreatedDate { get; set; }
        public DateTime? UpdatedDate { get; set; }
        public int ParentBusinessServiceId { get; set; }
        public string ParentBusinessServiceLabel { get; set; }
        public int Rank { get; set; }
        public bool IsDisabled { get; set; }
    }
}