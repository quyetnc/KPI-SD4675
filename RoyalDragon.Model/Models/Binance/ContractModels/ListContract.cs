﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RoyalDragon.Model.Models.Binance.ContractModels
{
    public class Result
    {
        public string blockNumber { get; set; }
        public string timeStamp { get; set; }
        public string hash { get; set; }
        public string nonce { get; set; }
        public string blockHash { get; set; }
        public string from { get; set; }
        public string contractAddress { get; set; }
        public string to { get; set; }
        public string value { get; set; }
        public string tokenName { get; set; }
        public string tokenSymbol { get; set; }
        public string tokenDecimal { get; set; }
        public string transactionIndex { get; set; }
        public string gas { get; set; }
        public string gasPrice { get; set; }
        public string gasUsed { get; set; }
        public string cumulativeGasUsed { get; set; }
        public string input { get; set; }
        public string confirmations { get; set; }
    }

    public class ListContract
    {
        public string status { get; set; }
        public string message { get; set; }
        public List<Result> result { get; set; }
    }


}
