using AutoMapper;
using PagedList;
using RoyalDragon.Model.Cdn;
using RoyalDragon.Model.Cdn.Entities;

namespace RoyalDragon.Common.Core
{
    /// <summary>
    /// Config auto mapper
    /// </summary>
    public class AutoMapperConfig
    {
        public static void RegisterMapping()
        {
            //Mapper.CreateMap<Document, DocumentModel>()
            //    .ForMember(dest => dest.CategoryName, opt => opt.MapFrom(src => src.Category.Label))
            //    .ForMember(dest => dest.ApplicationName, opt => opt.MapFrom(src => src.Category.Application.Description))
            //    .ForMember(dest => dest.CreatedBy, opt => opt.MapFrom(src => $"{src.CreatedBy.Lastname} {src.CreatedBy.Firstname}"))
            //    .ForMember(dest => dest.UpdatedBy, opt => opt.MapFrom(src => $"{src.UpdatedBy.Lastname} {src.UpdatedBy.Firstname}"));

            //Mapper.CreateMap<DocumentModel, Document>();
        }
    }

    public static class DocumentAutoMapper
    {
        public static IPagedList<DocumentModel> AutoMap(this IQueryable<Document> documents, int page = 1)
        {
            return documents
                .Select(x => new DocumentModel
                {
                    CreatedDate = x.CreatedDate,
                    CreatedBy = "",
                    CreatedById = x.CreatedById,
                    DocumentId = x.DocumentId,
                    Extension = x.Extension,
                    Label = x.Label,
                    PublicDocumentId = x.PublicDocumentId,
                    UpdatedBy = "",
                    UpdatedById = x.UpdatedById,
                    UpdatedDate = x.UpdatedDate,
                })
                .OrderByDescending(x => x.CreatedDate)
                .ToPagedList(page == 0 ? 1 : page, 20);
        }
    }
}
