using System;
using System.Collections.Generic;
using System.Linq;

namespace RoyalDragon.Model.Cdn
{
    public class CampaignViewModel
    {

        public int CampaignId { get; set; }

        public IEnumerable<AdGroupsViewModel> ADGroups { get; set; }

        public string Label { get; set; }

        public DateTime CreatedDate { get; set; }

        public DateTime? SentDate { get; set; }

        public DateTime? UpdateDate { get; set; }
        public int Month { get; set; }
        public int Year { get; set; }
        public int MonthYearNumber { get; set; }

        public string AdGroupId { get { return string.Join(",", ADGroups.Select(x => x.ADGroupsID)); } }
        public string AdGroupNames { get { return string.Join(",", ADGroups.Select(x => x.GroupName)); } }
    }

    public class CampaignViewModelGroupByMonthYear
    {
        public List<MonthYearNumberList> MonthYearNumberList { get; set; }
        public List<CampaignViewModel> CampaignViewModelList { get; set; }
    }

    public class MonthYearNumberList
    {
        public int MonthYearNumber { get; set; }
        public int Month { get; set; }
        public int Year { get; set; }
    }
}