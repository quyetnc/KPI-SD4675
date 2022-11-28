using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Nethereum.Contracts.Standards.ENS.ETHRegistrarController.ContractDefinition;
using OfficeOpenXml;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;
using RoyalDragon.Common.Commons;
using System.Globalization;
using static Microsoft.EntityFrameworkCore.DbLoggerCategory;

namespace RoyalDragon.Admin.Services
{
    public class ExportServices : BaseServices, IExportServices
    {
        public ExportServices ( IWebHostEnvironment environment, RoyalDragonDbContext db, IHttpContextAccessor httpContextAccessor, IRoyalDragonDbContextProcedures sp ) : base(environment, db, httpContextAccessor, sp)
        {
        }

        public async Task<ResultCustomModel<byte[]>> ExportExcelCustomer ( )
        {
            List<Customer> listRow = _db.Customer.ToList();
            var templateFile = FileInputUtil.GetFileExportFormInfo("Form_Export_Customer.xlsx");
            ExcelPackage.LicenseContext = LicenseContext.NonCommercial;
            using ExcelPackage package = new(templateFile, true);
            try
            {

                var sheet_Customer = package.Workbook.Worksheets["CustomerExport"];
                if (sheet_Customer == null)
                {
                    return new()
                    {
                        Success = false,
                        Message = "Thất bại"
                    };
                }
                var startRow = 4;

                for (int i = 0; i < listRow.Count; i++)
                {
                    var currentRow = i + startRow;
                    var row = listRow[i];
                    sheet_Customer.Cells[currentRow, 1].Value = $"KH{row.CustomerId.ToString("000")}";
                    sheet_Customer.Cells[currentRow, 2].Value = row.FullName;
                    sheet_Customer.Cells[currentRow, 3].Value = row.Phone;
                    sheet_Customer.Cells[currentRow, 4].Value = row.Address;
                    var isParseSuccess = DateTime.TryParseExact(row.CreateOn.ToString(), "dd/MM/yyyy hh:mm:ss tt", null, DateTimeStyles.None, out var _date);

                    if (isParseSuccess)
                    {
                        sheet_Customer.Cells[currentRow, 5].Style.Numberformat.Format = "hh:mm";
                    }
                    else
                    {
                        sheet_Customer.Cells[currentRow, 5].Value = isParseSuccess ? _date : row.CreateOn.ToString();
                    }
                    sheet_Customer.Cells[currentRow, 6].Value = row.IsActive ? "Kích hoạt" : "Vô hiệu hóa";
                    sheet_Customer.Cells[currentRow, 7].Value = row.CreateBy;
                    sheet_Customer.Cells[currentRow, 8].Value = row.IsBadCustomer ? "Có" : "Không";
                    sheet_Customer.Cells[currentRow, 9].Value = row.ReasonBad ?? "";
                }
                sheet_Customer.Cells.AutoFitColumns();
                var bytes = package.GetAsByteArray();
                package.Dispose();
                return new()
                {
                    Success = true,
                    Data = bytes
                };
            }
            catch (Exception)
            {
                return new()
                {
                    Success = false,
                    Message = "Thất bại"
                };
                throw;
            }

        }
    }
    public interface IExportServices
    {
        Task<ResultCustomModel<byte[]>> ExportExcelCustomer ( );
    }
}
