// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
#nullable disable
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace RoyalDragon.Cdn.Models.Entities
{
    public partial class FamilyRelationShip
    {
        [JsonProperty(PropertyName = "id")]
        public int Id { get; set; }
        public string Pids { get; set; }
        [JsonProperty(PropertyName = "relationship")]
        public string Relationship { get; set; }
        [JsonProperty(PropertyName = "name")]
        public string Name { get; set; }
        [JsonProperty(PropertyName = "img")]
        public string Img { get; set; }
        [JsonProperty(PropertyName = "bdate")]
        public int? Bdate { get; set; }
        [JsonProperty(PropertyName = "ddate")]
        public int? Ddate { get; set; }
        [JsonProperty(PropertyName = "mid")]
        public int? Mid { get; set; }
        [JsonProperty(PropertyName = "fid")]
        public int? Fid { get; set; }
        [JsonProperty(PropertyName = "gender")]
        public string Gender { get; set; }
        [JsonProperty(PropertyName = "tags")]
        public string Tags { get; set; }
        [JsonProperty(PropertyName = "userId")]
        public int UserId { get; set; }

        public virtual User User { get; set; }
    }
}