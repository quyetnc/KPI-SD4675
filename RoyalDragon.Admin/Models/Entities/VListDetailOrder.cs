// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace RoyalDragon.Admin.Models.Entities
{
    public partial class VListDetailOrder
    {
        public int OrderId { get; set; }
        public string ProductName { get; set; }
        public int Price { get; set; }
        public short SaleOff { get; set; }
        public int Quantity { get; set; }
        public int? TotalPrice { get; set; }
    }
}