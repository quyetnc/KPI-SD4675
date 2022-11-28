using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RoyalDragon.Model.UsersModels
{
    public class UserInformation
    {
        public int UsersId { get; set; }
        public string Fullname { get; set; }
        public string Address { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public DateTime CreateOn { get; set; }
        public string Facebook { get; set; }
        public string Twitter { get; set; }
        public string Youtube { get; set; }
        public string Linkedin { get; set; }
        public string Avatar { get; set; }
        public string BlockChainAddress { get; set; }
        public string CheckPolicy { get; set; }
        public string Policy { get; set; }
        public string RefferalId { get; set; }
        public int Dona { get; set; }
        public int Level { get; set; }
        public int NftReferal { get; set; }
        public bool IsGetBnbLevel4 { get; set; }
        public double Busd { get; set; }
        public double Bnb { get; set; }
        public double Usdt { get; set; }
        public bool IsActive { get; set; }
    }
}
