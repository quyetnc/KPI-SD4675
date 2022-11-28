using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RoyalDragon.Model.Cdn
{
    public class Select2Item : ISelect2Item
    {
        public object id { get; set; }

        public string text { get; set; }

        public bool Disabled { get; set; }
    }
    public interface ISelect2Item
    {
        object id { get; set; }

        string text { get; set; }

        bool Disabled { get; set; }
    }
}
