﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace RoyalDragon.Admin.Models.Entities
{
    public partial class HistoryCallCustomer
    {
        public int HistoryCallCustomerId { get; set; }
        public int CustomerId { get; set; }
        public string Note { get; set; }
        public string CustomerName { get; set; }
        public bool? IsBuy { get; set; }
        public DateTime CreateOn { get; set; }
        public int UserId { get; set; }

        public virtual User User { get; set; }
    }
}