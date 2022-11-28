using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;
using System.ComponentModel.DataAnnotations.Schema;

namespace RoyalDragon.Admin.Features.CostFeature
{
    public class CreateCostRequest : IRequest<ResultCustomModel<Cost>>
    {
        public Cost? Cost { get; set; }
        public class QueryHandler : IRequestHandler<CreateCostRequest, ResultCustomModel<Cost>>
        {
            private readonly RoyalDragonDbContext _db;
            private readonly IMapper _mapper;
            private readonly IMediator _mediator;
            public QueryHandler(
                RoyalDragonDbContext db,
                IMapper mapper,
                IConfiguration configuration,
                IMediator mediator)
            {
                _db = db;
                _mapper = mapper;
                _mediator = mediator;
            }

            public async Task<ResultCustomModel<Cost>> Handle(CreateCostRequest request, CancellationToken cancellationToken)
            {
                request.Cost.IsActive=true;
                request.Cost.IsApprove=false;
                _db.Entry(request.Cost).State = EntityState.Added;
               int save = await _db.SaveChangesAsync();
                return new ResultCustomModel<Cost>
                {
                    Code = save > 1 ? 200 : 400,
                    Message = save > 1 ? "Thành công" : "Có gì đó sai sai, vui lòng kiểm tra lại",
                    Success = save > 1,
                    Data = request.Cost,
                };
            }
        }
        public class Profile : AutoMapper.Profile
        {
            public Profile()
            {
                //CreateMap<CreateCostModel, Cost>()
                //    .ForMember(x=);
            }
        }
    }

}
