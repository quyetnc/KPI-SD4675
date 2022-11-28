using AutoMapper;
using MediatR;
using Microsoft.CodeAnalysis;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;
using System.ComponentModel.DataAnnotations.Schema;

namespace RoyalDragon.Admin.Features.ProductFeature
{
    public class HistoryUpdateProductRequest : IRequest<ResultCustomModel<List<ProductHistory>>>
    {
        public int ProductId { get; set; } = 0;

        public class QueryHandler : IRequestHandler<HistoryUpdateProductRequest, ResultCustomModel<List<ProductHistory>>>
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

            public async Task<ResultCustomModel<List<ProductHistory>>> Handle(HistoryUpdateProductRequest request, CancellationToken cancellationToken)
            {
                var data = await _db.ProductHistory.Where(x => x.ProductId == request.ProductId).ToListAsync();
                return new ResultCustomModel<List<ProductHistory>>
                {
                    Code = data != null ? 200 : 404,
                    Success = data != null,
                    Message = data != null ? "Ok" : "Không tìm thấy lịch sử",
                    Data = data
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
