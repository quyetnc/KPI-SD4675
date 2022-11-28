using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Diagnostics.CodeAnalysis;
using System.Web;

namespace RoyalDragon.Model.Cdn
{
    /// <summary>
    /// Document view model
    /// </summary>
    public class DocumentModel
    {
        public int DocumentId { get; set; } = 0;

        public int PublicDocumentId { get; set; }

        [Display(Name = "File Name")]
        public string? Label { get; set; }

        public string? Extension { get; set; }

        public IFormFile? FileUpload { get; set; }

        [Display(Name = "Created By")]
        public int? CreatedById { get; set; }

        public string? CreatedBy { get; set; }

        [Display(Name = "Created Date")]
        public DateTime? CreatedDate { get; set; }

        [Display(Name = "Updated By")]
        public int? UpdatedById { get; set; }

        public string? UpdatedBy { get; set; }

        [Display(Name = "Updated Date")]
        public DateTime? UpdatedDate { get; set; }


        public string CodeName => $"";

        /// <summary>
        /// Download link for this document
        /// </summary>
        [Display(Name = "Download")]
        public string DownloadLink => $"/Home/Download/{PublicDocumentId}/{FileName}";

        [Display(Name = "File Name")]
        public string FileName => $"{Label}.{Extension}";

        /// <summary>
        /// Check if document is new or existed
        /// </summary>
        public bool IsAddNew => DocumentId == 0;

        public List<Select2Item>? CategoryList { get; set; }
    }
}