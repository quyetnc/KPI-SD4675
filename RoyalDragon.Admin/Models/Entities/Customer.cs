// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace RoyalDragon.Admin.Models.Entities
{
    public partial class Customer
    {
        public Customer()
        {
            Order = new HashSet<Order>();
            Review = new HashSet<Review>();
        }

        public int CustomerId { get; set; }
        public string FullName { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public DateTime CreateOn { get; set; }
        public bool IsActive { get; set; }
        public int CreateByUserId { get; set; }
        public string CreateBy { get; set; }
        public bool IsBadCustomer { get; set; }
        public string ReasonBad { get; set; }
        public string Image { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }

        public virtual ICollection<Order> Order { get; set; }
        public virtual ICollection<Review> Review { get; set; }
    }
}