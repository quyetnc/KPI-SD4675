namespace RoyalDragon.Admin.Models.FacebookModels
{

    public class CheckToken
    {
        public Data data { get; set; }
        public class Data
        {
            public long app_id { get; set; }
            public string type { get; set; }
            public string application { get; set; }
            public int expires_at { get; set; }
            public bool is_valid { get; set; }
            public int issued_at { get; set; }
            public Metadata metadata { get; set; }
            public List<string> scopes { get; set; }
            public string user_id { get; set; }
        }

        public class Metadata
        {
            public string sso { get; set; }
        }
    }
}
