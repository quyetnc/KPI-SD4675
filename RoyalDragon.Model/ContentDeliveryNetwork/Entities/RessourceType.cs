﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using System;
using System.Collections.Generic;

namespace RoyalDragon.Model.ContentDeliveryNetwork.Entities
{
    public partial class RessourceType
    {
        public RessourceType()
        {
            Ressource = new HashSet<Ressource>();
        }

        public int TypeId { get; set; }
        public string Label { get; set; }

        public virtual ICollection<Ressource> Ressource { get; set; }
    }
}