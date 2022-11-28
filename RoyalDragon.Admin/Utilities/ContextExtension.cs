using static Dapper.SqlMapper;
using System.Data;
using Microsoft.Data.SqlClient;
using RoyalDragon.Admin.Models.Entities;
using Microsoft.EntityFrameworkCore;

namespace RoyalDragon.Admin.Utilities
{
    public static class ContextExtension
    {
        public static async Task<GridReader> StoredProcedureAsync(this RoyalDragonDbContext db, string sql, object param = null)
        {
            var con = db.Database.GetDbConnection() as SqlConnection;
            return await con.QueryMultipleAsync(sql, param, null, null, CommandType.StoredProcedure);
        }
    }
}
