using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RoyalDragon.Model.Models.RegisterModels
{
    public class RegisterBasic
    {
        [Required]
        public string Address { get; set; }
        [Required]
        public string Password { get; set; }
        public string? RefAddress { get; set; }
    }
}
