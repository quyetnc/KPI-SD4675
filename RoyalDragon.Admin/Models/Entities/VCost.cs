// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace RoyalDragon.Admin.Models.Entities
{
    public partial class VCost
    {
        public int CostId { get; set; }
        public DateTime CreateOn { get; set; }
        public int AmountOfMoney { get; set; }
        public string Reason { get; set; }
        public bool IsApprove { get; set; }
        public string ApproveBy { get; set; }
        public string CreateBy { get; set; }
    }
}