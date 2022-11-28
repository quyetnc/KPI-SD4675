using System.ComponentModel.DataAnnotations;

namespace RoyalDragon.Admin.Models.LoginModels
{
    public class LoginRequest
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
