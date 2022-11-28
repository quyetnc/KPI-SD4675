using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RoyalDragon.Model.Models.RegisterModels
{
    public class Register
    {
        [Required]
        public string Password { get; set; }
        [Required]
        public string Fullname { get; set; }
        public string? Address { get; set; }
        public string Email { get; set; }
        public string Username { get; set; }
        public string Phone { get; set; }
        public int RefferalId { get; set; }
        public string Refferal { get; set; }
        public string? BlockChainAddress { get; set; }
        public string Policy { get; set; }
    }
}
