// <auto-generated> This file has been auto generated by EF Core Power Tools. </auto-generated>
using Microsoft.Data.SqlClient;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Models.Entities;
using System;
using System.Collections.Generic;
using System.Data;
using System.Threading;
using System.Threading.Tasks;

namespace RoyalDragon.Admin.Models.Entities
{
    public partial class RoyalDragonDbContext
    {
        private IRoyalDragonDbContextProcedures _procedures;

        public virtual IRoyalDragonDbContextProcedures Procedures
        {
            get
            {
                if (_procedures is null) _procedures = new RoyalDragonDbContextProcedures(this);
                return _procedures;
            }
            set
            {
                _procedures = value;
            }
        }

        public IRoyalDragonDbContextProcedures GetProcedures()
        {
            return Procedures;
        }

        protected void OnModelCreatingGeneratedProcedures(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Init_ECommerce_PageResult>().HasNoKey().ToView(null);
            modelBuilder.Entity<RD_GetProductDetailResult>().HasNoKey().ToView(null);
            modelBuilder.Entity<RD_SettingResult>().HasNoKey().ToView(null);
        }
    }

    public partial class RoyalDragonDbContextProcedures : IRoyalDragonDbContextProcedures
    {
        private readonly RoyalDragonDbContext _context;

        public RoyalDragonDbContextProcedures(RoyalDragonDbContext context)
        {
            _context = context;
        }

        public virtual async Task<List<Init_ECommerce_PageResult>> Init_ECommerce_PageAsync(OutputParameter<int> returnValue = null, CancellationToken cancellationToken = default)
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
            var _ = await _context.SqlQueryAsync<Init_ECommerce_PageResult>("EXEC @returnValue = [dbo].[Init_ECommerce_Page]", sqlParameters, cancellationToken);

            returnValue?.SetValue(parameterreturnValue.Value);

            return _;
        }

        public virtual async Task<List<RD_GetProductDetailResult>> RD_GetProductDetailAsync(int? ProductId, OutputParameter<int> returnValue = null, CancellationToken cancellationToken = default)
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
                    ParameterName = "ProductId",
                    Value = ProductId ?? Convert.DBNull,
                    SqlDbType = System.Data.SqlDbType.Int,
                },
                parameterreturnValue,
            };
            var _ = await _context.SqlQueryAsync<RD_GetProductDetailResult>("EXEC @returnValue = [dbo].[RD_GetProductDetail] @ProductId", sqlParameters, cancellationToken);

            returnValue?.SetValue(parameterreturnValue.Value);

            return _;
        }

        public virtual async Task<int> Rd_RegisterAsync(string Username, string Password, string Phone, string Email, string Address, string Birthday, string Fullname, int? RoleId, OutputParameter<int> returnValue = null, CancellationToken cancellationToken = default)
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
                    ParameterName = "Username",
                    Size = 100,
                    Value = Username ?? Convert.DBNull,
                    SqlDbType = System.Data.SqlDbType.VarChar,
                },
                new SqlParameter
                {
                    ParameterName = "Password",
                    Size = 100,
                    Value = Password ?? Convert.DBNull,
                    SqlDbType = System.Data.SqlDbType.VarChar,
                },
                new SqlParameter
                {
                    ParameterName = "Phone",
                    Size = 100,
                    Value = Phone ?? Convert.DBNull,
                    SqlDbType = System.Data.SqlDbType.VarChar,
                },
                new SqlParameter
                {
                    ParameterName = "Email",
                    Size = 100,
                    Value = Email ?? Convert.DBNull,
                    SqlDbType = System.Data.SqlDbType.VarChar,
                },
                new SqlParameter
                {
                    ParameterName = "Address",
                    Size = 100,
                    Value = Address ?? Convert.DBNull,
                    SqlDbType = System.Data.SqlDbType.VarChar,
                },
                new SqlParameter
                {
                    ParameterName = "Birthday",
                    Size = 100,
                    Value = Birthday ?? Convert.DBNull,
                    SqlDbType = System.Data.SqlDbType.VarChar,
                },
                new SqlParameter
                {
                    ParameterName = "Fullname",
                    Size = 100,
                    Value = Fullname ?? Convert.DBNull,
                    SqlDbType = System.Data.SqlDbType.VarChar,
                },
                new SqlParameter
                {
                    ParameterName = "RoleId",
                    Value = RoleId ?? Convert.DBNull,
                    SqlDbType = System.Data.SqlDbType.Int,
                },
                parameterreturnValue,
            };
            var _ = await _context.Database.ExecuteSqlRawAsync("EXEC @returnValue = [dbo].[Rd_Register] @Username, @Password, @Phone, @Email, @Address, @Birthday, @Fullname, @RoleId", sqlParameters, cancellationToken);

            returnValue?.SetValue(parameterreturnValue.Value);

            return _;
        }

        public virtual async Task<List<RD_SettingResult>> RD_SettingAsync(OutputParameter<int> returnValue = null, CancellationToken cancellationToken = default)
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
            var _ = await _context.SqlQueryAsync<RD_SettingResult>("EXEC @returnValue = [dbo].[RD_Setting]", sqlParameters, cancellationToken);

            returnValue?.SetValue(parameterreturnValue.Value);

            return _;
        }
    }
}
