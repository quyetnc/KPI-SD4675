// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace RoyalDragon.Admin.Models.Entities
{
    public partial class VReview
    {
        public int ReviewId { get; set; }
        public int CustomerId { get; set; }
        public string Image { get; set; }
        public int ProductId { get; set; }
        public string Comment { get; set; }
        public short Star { get; set; }
        public DateTime CreateOn { get; set; }
        public bool IsActive { get; set; }
        public string CustomerName { get; set; }
    }
}