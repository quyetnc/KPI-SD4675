// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace RoyalDragon.Admin.Models.Entities
{
    public partial class VListOrder
    {
        public int OrderId { get; set; }
        public string Note { get; set; }
        public int? TotalMoney { get; set; }
        public int? QuantityProduct { get; set; }
        public int UserId { get; set; }
        public int CustomerId { get; set; }
        public string CustomerName { get; set; }
        public short State { get; set; }
        public DateTime CreateOn { get; set; }
    }
}