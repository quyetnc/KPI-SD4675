using RoyalDragon.Cdn.Models.Entities;
using RoyalDragon.Cdn.Services;
using RoyalDragon.Cdn.Utilities;
using Microsoft.AspNetCore.Mvc;
using AutoMapper;

namespace RoyalDragon.Cdn.Controllers
{
    public class AdminController : BaseController
    {
        private readonly IFamilyTreeService _familyTreeService;
        public AdminController(IFamilyTreeService familyTreeService,IMapper dapper):base(dapper)
        {
            _familyTreeService = familyTreeService;
        }
        public async Task<IActionResult> FamilyTree()
        {
            var data = await _familyTreeService.GetRelations(User.GetUserId());
            return View(data);
        }
        public IActionResult Index()
        {
            return RedirectToAction("FamilyTree");
        }
        [Route("/Admin/FamilyTree/EditFamilyTree/{id}")]
        public async Task<IActionResult> EditFamilyTree(int id)
        {
            var data = await _familyTreeService.GetFamilyTree(User.GetUserId(), id);
            var familyTrees = await _familyTreeService.GetRelations(User.GetUserId());
            if (data != null)
                ViewBag.FamilyTreeSelect = familyTrees.Where(x => x.Id != id);
            return View(data);
        }
        [HttpPost]
        public async Task<IActionResult> FamilyTreeEdit(FamilyRelationShip family)
        {
            var data = await _familyTreeService.GetFamilyTree(User.GetUserId(), family.Id);
            var a = Request.Form.Files;
            var familyTrees = await _familyTreeService.GetRelations(User.GetUserId());
            if (data != null)
                ViewBag.FamilyTreeSelect = familyTrees.Where(x => x.Id != family.Id);
            return View(data);
        }
        [Route("/Admin/FamilyTree/Create")]
        [HttpPost]
        public async Task<IActionResult> CreateFamilyTree([FromBody] FamilyRelationShip family)
        {
            return View();
        }
    }
}
