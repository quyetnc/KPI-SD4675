using AutoMapper;
using RoyalDragon.Admin.Models.Entities;
using RoyalDragon.Admin.Models.LoginModels;

namespace RoyalDragon.Admin.Models.Mappers
{
    public class AutoMapperProfile: Profile
    {
        public AutoMapperProfile()
        {
            CreateMap<VLogin, LoginResponse>();
            CreateMap<Entities.Customer, CustomerLoginResponsee>();
        }
    }
}
