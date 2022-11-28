using AutoMapper;
using RoyalDragon.Model.Cdn;
using RoyalDragon.Model.Cdn.Entities;
using RoyalDragon.Model.Models.BoxModels;
using RoyalDragon.Model.Models.Entities;
using RoyalDragon.Model.Models.RegisterModels;
using RoyalDragon.Model.UsersModels;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace RoyalDragon.Model.Mappers
{
    public class AutoMapperProfile : Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<Register, Users>()
                                        .ForMember(x => x.BlockChainAddress, y=>y.MapFrom(user=>user.BlockChainAddress.Trim().ToLower()));
            CreateMap<Users, UserInformation>();
            CreateMap<Box, BoxResponse>();
            CreateMap<Box, OpenBox>();
            CreateMap<Document, DocumentModel>();
        }
    }
}
