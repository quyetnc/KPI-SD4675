using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RoyalDragon.Model.Models.BoxModels
{
    public class BoxResponse
    {
        public int BoxId { get; set; }
        public string Image { get; set; }
        public int PriceRom { get; set; }
        public bool IsOpen { get; set; }
        public string Name { get; set; }
    }
}
