﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace RoyalDragon.Model.Models.Entities
{
    public partial class Box
    {
        public int BoxId { get; set; }
        public string Image { get; set; }
        public int PriceRom { get; set; }
        public string TypePrize { get; set; }
        public float Value { get; set; }
        public int UsersId { get; set; }
        public bool IsOpen { get; set; }
        public string Name { get; set; }
    }
}