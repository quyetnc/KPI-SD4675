using RoyalDragon.Cdn.Models.Entities;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Newtonsoft.Json;

namespace RoyalDragon.Cdn.Models.FamilyTreeModels
{
    public class FamilyTreeResponse
    {
        [JsonProperty(PropertyName = "id")]
        public int Id { get; set; }
        [JsonProperty(PropertyName = "pids")]
        public int[]? Pids { get; set; }
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
        public string[]? Tags { get; set; }
    }
}
