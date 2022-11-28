using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;
using RoyalDragon.Common.Commons;
using System.ComponentModel.DataAnnotations.Schema;

namespace RoyalDragon.Admin.Features.ProductFeature
{
    public class ListOrderRequest : IRequest<ResultCustomModel<List<VListOrder>>>
    {
        public int UserId { get; set; }
        public string? Role { get; set; }

        public class QueryHandler : IRequestHandler<ListOrderRequest, ResultCustomModel<List<VListOrder>>>
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

            public async Task<ResultCustomModel<List<VListOrder>>> Handle(ListOrderRequest request, CancellationToken cancellationToken)
            {
                IQueryable<VListOrder> query;
                if (request.Role == AuthConst.Admin)
                    query = _db.VListOrder;
                else
                    query = _db.VListOrder.Where(x => x.UserId == request.UserId);
                var data = await query.ToListAsync();
                return new ResultCustomModel<List<VListOrder>>
                {
                    Code = 200,
                    Success = true,
                    Data = data,
                    Message = "Ok"
                };
            }
        }
        public class Profile : AutoMapper.Profile
        {
            public Profile()
            {
                //CreateMap<LauncherApplication, Result>();
            }
        }
    }
}
