﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace RoyalDragon.Model.Models.Entities
{
    public partial class ClaimedInDay
    {
        public int ClaimedInDayId { get; set; }
        public DateTime CreateOn { get; set; }
        public bool IsClaimed { get; set; }
        public int NftUsersId { get; set; }

        public virtual NftUsers NftUsers { get; set; }
    }
}