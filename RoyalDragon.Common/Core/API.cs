using RestSharp;
using RestSharp.Serializers.NewtonsoftJson;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RoyalDragon.Common.Core
{
    public static class API
    {
        public static T Post<T>(string path, object param = null)
        {
            var client = new RestClient(path);
            client.UseNewtonsoftJson();
            var request = new RestRequest();
            request.Method = Method.Post;
            request.AddHeader("Accept", "application/json");
            request.AddHeader("Content-Type", "application/json");
            request.AddJsonBody(param);
            var res = client.Execute<T>(request);
            return res.Data;
        }

        public static T Get<T>(string path)
        {
            var client = new RestClient(path);
            var request = new RestRequest();
            request.Method = Method.Get;
            var res = client.Execute<T>(request);
            return res.Data;
        }
        public static async Task<T> GetAsync<T>(string path)
        {
            var client = new RestClient(path);
            var request = new RestRequest();
            request.Method = Method.Get;
            var res =await client.ExecuteAsync<T>(request);
            return res.Data;
        }
        public static async Task<string> GetStringAsync(string path)
        {
            var client = new RestClient(path);
            var request = new RestRequest();
            request.Method = Method.Get;
            var res =await client.ExecuteAsync<string>(request);
            return res.Content;
        }
    }
}
