using System.ComponentModel.DataAnnotations;

namespace RoyalDragon.Cdn.Models.LoginModels
{
    public class LoginRequest
    {
        [Required]
        public string Username { get; set; }
        [Required]
        public string Password { get; set; }
    }
}
