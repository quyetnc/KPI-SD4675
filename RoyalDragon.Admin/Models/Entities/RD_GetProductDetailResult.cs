// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace RoyalDragon.Admin.Models.Entities
{
    public partial class RD_GetProductDetailResult
    {
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public string CategoryName { get; set; }
        public int InStock { get; set; }
        public int PriceInput { get; set; }
        public string Img { get; set; }
        public string Img2 { get; set; }
        public string Img3 { get; set; }
        public string CategorySlug { get; set; }
        public string Slug { get; set; }
        public string Description { get; set; }
        public string ShortDescription { get; set; }
        public int Quantity { get; set; }
        public short SaleOff { get; set; }
    }
}
