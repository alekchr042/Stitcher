using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Stitcher.DataAccess.Model;
using Stitcher.Services.Interfaces;

namespace Stitcher.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class FlossController : ControllerBase
    {
        private readonly IFlossService flossService;
        public FlossController(IFlossService flossService)
        {
            this.flossService = flossService;
        }

        [HttpGet]
        public Floss GetFloss(Guid id)
        {
            var floss = flossService.GetFloss(id);
            return floss.Result;
        }

        [HttpGet]
        [Route("GetAll")]
        public IEnumerable<Floss> GetAllFlosses()
        {
            var allFlosses = flossService.GetAllFlosses();
            return allFlosses.Result;
        }
    }
}