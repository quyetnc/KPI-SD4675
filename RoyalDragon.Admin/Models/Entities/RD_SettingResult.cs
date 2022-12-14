// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace RoyalDragon.Admin.Models.Entities
{
    public partial class RD_SettingResult
    {
        public int ProductId { get; set; }
        public string Name { get; set; }
        public int PriceInput { get; set; }
        public int PriceOutput { get; set; }
        public string Img { get; set; }
        public bool IsSell { get; set; }
        public bool IsActive { get; set; }
        public string Description { get; set; }
        public string ShortDescription { get; set; }
        public int Quantity { get; set; }
        public short SaleOff { get; set; }
        public int CategoryId { get; set; }
        public bool IsBanner { get; set; }
        public bool IsFeather { get; set; }
        public bool IsSpecialOffer { get; set; }
        public bool IsPopular { get; set; }
        public string BannerImg { get; set; }
        public string IntroduceBannerHtml { get; set; }
        public string Slug { get; set; }
        public string Img2 { get; set; }
        public string Img3 { get; set; }
    }
}
