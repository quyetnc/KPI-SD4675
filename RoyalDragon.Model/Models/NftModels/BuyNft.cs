using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RoyalDragon.Model.Models.NftModels
{
    public class BuyNft
    {
        [Required]
        public int Quantity { get; set; }
        [Required]
        public string TypeBuy { get; set; }
        [Required]
        public string Currency { get; set; }
        [Required]
        public int NftId { get; set; }
        [Required]
        public string TransactionHash { get; set; }
        public string? AddressRef { get; set; }
        public string? Address { get; set; }
    }
}
