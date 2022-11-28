using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RoyalDragon.Common.Commons
{
    public enum StateOrderEnum : short
    {
        [Description("Chờ xác nhận")]
        WaitingApprove = 0,
        [Description("Chờ lấy hàng")]
        WaitingDelivery = 1,
        [Description("Đang giao hàng")]
        DeliveryProcess = 2,
        [Description("Giao hàng thành công")]
        Done = 3,
        [Description("Đã huỷ")]
        Cancel = 4
    }
}
