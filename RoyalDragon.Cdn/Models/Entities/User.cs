// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace RoyalDragon.Cdn.Models.Entities
{
    public partial class User
    {
        public User()
        {
            FamilyRelationShip = new HashSet<FamilyRelationShip>();
        }

        public int UserId { get; set; }
        public string Username { get; set; }
        public string Password { get; set; }
        public string Email { get; set; }
        public bool? IsActive { get; set; }
        public DateTime CreateOn { get; set; }

        public virtual ICollection<FamilyRelationShip> FamilyRelationShip { get; set; }
    }
}