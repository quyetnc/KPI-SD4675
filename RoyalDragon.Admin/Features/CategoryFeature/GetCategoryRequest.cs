using AutoMapper;
using MediatR;
using Microsoft.EntityFrameworkCore;
using RoyalDragon.Admin.Models.CustomModels;
using RoyalDragon.Admin.Models.Entities;
using System.ComponentModel.DataAnnotations.Schema;

namespace RoyalDragon.Admin.Features.CategoryFeather
{
    public class GetCategoryRequest : IRequest<ResultCustomModel<Category>>
    {
        public int CategoryId { get; set; }
        public class QueryHandler : IRequestHandler<GetCategoryRequest, ResultCustomModel<Category>>
        {
            private readonly RoyalDragonDbContext _db;
            private readonly IMapper _mapper;
            private readonly IMediator _mediator;
            public QueryHandler (
                RoyalDragonDbContext db,
                IMapper mapper,
                IConfiguration configuration,
                IMediator mediator )
            {
                _db = db;
                _mapper = mapper;
                _mediator = mediator;
            }

            public async Task<ResultCustomModel<Category>> Handle ( GetCategoryRequest request, CancellationToken cancellationToken )
            {
                Category data = await _db.Category.FirstOrDefaultAsync(x => x.CategoryId == request.CategoryId);
                if (data == null)
                {
                    return new ResultCustomModel<Category>
                    {
                        Code = 404,
                        Success = false,
                        Data = data,
                        Message = "Không thấy mã danh mục này trong hệ thống"
                    };
                }
                return new ResultCustomModel<Category>
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
            public Profile ( )
            {
                //CreateMap<LauncherApplication, Result>();
            }
        }
    }
}
