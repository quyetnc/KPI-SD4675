﻿// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using RoyalDragon.Model.Models.Entities;
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data;
using System.Threading;
using System.Threading.Tasks;

namespace RoyalDragon.Model.Models.Entities
{
    public partial class BlockChainDbContext
    {
        private IBlockChainDbContextProcedures _procedures;

        public virtual IBlockChainDbContextProcedures Procedures
        {
            get
            {
                if (_procedures is null) _procedures = new BlockChainDbContextProcedures(this);
                return _procedures;
            }
            set
            {
                _procedures = value;
            }
        }

        public IBlockChainDbContextProcedures GetProcedures()
        {
            return Procedures;
        }

        protected void OnModelCreatingGeneratedProcedures(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<BLC_ActionClaimNftResult>().HasNoKey().ToView(null);
            modelBuilder.Entity<BLC_GetUsersResult>().HasNoKey().ToView(null);
            modelBuilder.Entity<BLC_ListNftOfUserResult>().HasNoKey().ToView(null);
        }
    }

    public partial class BlockChainDbContextProcedures : IBlockChainDbContextProcedures
    {
        private readonly BlockChainDbContext _context;

        public BlockChainDbContextProcedures(BlockChainDbContext context)
        {
            _context = context;
        }

        public virtual async Task<List<BLC_ActionClaimNftResult>> BLC_ActionClaimNftAsync(int? UsersId, int? NftId, OutputParameter<int> returnValue = null, CancellationToken cancellationToken = default)
        {
            var parameterreturnValue = new SqlParameter
            {
                ParameterName = "returnValue",
                Direction = System.Data.ParameterDirection.Output,
                SqlDbType = System.Data.SqlDbType.Int,
            };

            var sqlParameters = new []
            {
                new SqlParameter
                {
                    ParameterName = "UsersId",
                    Value = UsersId ?? Convert.DBNull,
                    SqlDbType = System.Data.SqlDbType.Int,
                },
                new SqlParameter
                {
                    ParameterName = "NftId",
                    Value = NftId ?? Convert.DBNull,
                    SqlDbType = System.Data.SqlDbType.Int,
                },
                parameterreturnValue,
            };
            var _ = await _context.SqlQueryAsync<BLC_ActionClaimNftResult>("EXEC @returnValue = [dbo].[BLC_ActionClaimNft] @UsersId, @NftId", sqlParameters, cancellationToken);

            returnValue?.SetValue(parameterreturnValue.Value);

            return _;
        }

        public virtual async Task<int> BLC_AddAndUpdateRoseAsync(string BlockChainAddress, string BlockChainAddressReferal, OutputParameter<int> returnValue = null, CancellationToken cancellationToken = default)
        {
            var parameterreturnValue = new SqlParameter
            {
                ParameterName = "returnValue",
                Direction = System.Data.ParameterDirection.Output,
                SqlDbType = System.Data.SqlDbType.Int,
            };

            var sqlParameters = new []
            {
                new SqlParameter
                {
                    ParameterName = "BlockChainAddress",
                    Size = 100,
                    Value = BlockChainAddress ?? Convert.DBNull,
                    SqlDbType = System.Data.SqlDbType.VarChar,
                },
                new SqlParameter
                {
                    ParameterName = "BlockChainAddressReferal",
                    Size = 100,
                    Value = BlockChainAddressReferal ?? Convert.DBNull,
                    SqlDbType = System.Data.SqlDbType.VarChar,
                },
                parameterreturnValue,
            };
            var _ = await _context.Database.ExecuteSqlRawAsync("EXEC @returnValue = [dbo].[BLC_AddAndUpdateRose] @BlockChainAddress, @BlockChainAddressReferal", sqlParameters, cancellationToken);

            returnValue?.SetValue(parameterreturnValue.Value);

            return _;
        }

        public virtual async Task<List<BLC_GetUsersResult>> BLC_GetUsersAsync(OutputParameter<int> returnValue = null, CancellationToken cancellationToken = default)
        {
            var parameterreturnValue = new SqlParameter
            {
                ParameterName = "returnValue",
                Direction = System.Data.ParameterDirection.Output,
                SqlDbType = System.Data.SqlDbType.Int,
            };

            var sqlParameters = new []
            {
                parameterreturnValue,
            };
            var _ = await _context.SqlQueryAsync<BLC_GetUsersResult>("EXEC @returnValue = [dbo].[BLC_GetUsers]", sqlParameters, cancellationToken);

            returnValue?.SetValue(parameterreturnValue.Value);

            return _;
        }

        public virtual async Task<List<BLC_ListNftOfUserResult>> BLC_ListNftOfUserAsync(int? UsersId, OutputParameter<int> returnValue = null, CancellationToken cancellationToken = default)
        {
            var parameterreturnValue = new SqlParameter
            {
                ParameterName = "returnValue",
                Direction = System.Data.ParameterDirection.Output,
                SqlDbType = System.Data.SqlDbType.Int,
            };

            var sqlParameters = new []
            {
                new SqlParameter
                {
                    ParameterName = "UsersId",
                    Value = UsersId ?? Convert.DBNull,
                    SqlDbType = System.Data.SqlDbType.Int,
                },
                parameterreturnValue,
            };
            var _ = await _context.SqlQueryAsync<BLC_ListNftOfUserResult>("EXEC @returnValue = [dbo].[BLC_ListNftOfUser] @UsersId", sqlParameters, cancellationToken);

            returnValue?.SetValue(parameterreturnValue.Value);

            return _;
        }
    }
}
