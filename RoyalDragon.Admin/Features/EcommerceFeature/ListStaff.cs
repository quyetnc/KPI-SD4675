using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Features.ProductFeature;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.EcommerceModels;
using RoyalDragon.Admin.Models.Entities;

namespace RoyalDragon.Admin.Features.EcommerceFeature
{
    public class ListStaff : IRequest<ResultCustomModel<List<ListStaffResponse>>>
    {

        public class QueryHandler : IRequestHandler<ListStaff, ResultCustomModel<List<ListStaffResponse>>>
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

            public async Task<ResultCustomModel<List<ListStaffResponse>>> Handle(ListStaff request, CancellationToken cancellationToken)
            {
                var data = await _db.User.Select(x => new ListStaffResponse
                {
                    Role = x.Position,
                    FullName = x.Fullname,
                    Image = x.Avatar
                }).ToListAsync();
                return new ResultCustomModel<List<ListStaffResponse>>
                {
                    Code = 200,
                    Success = true,
                    Data = data,
                    Message = "Ok"
                };
            }
        }
    }
}
