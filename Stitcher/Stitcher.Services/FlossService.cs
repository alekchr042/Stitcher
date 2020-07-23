using Stitcher.DataAccess.Model;
using Stitcher.Repository.Interfaces;
using Stitcher.Services.Interfaces;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Stitcher.Services
{
    public class FlossService : IFlossService
    {
        public readonly IFlossRepository FlossRepository;
        public FlossService(IFlossRepository flossRepository)
        {
            FlossRepository = flossRepository;
        }

        public async Task<Floss> GetFloss(Guid id)
        {
            return await FlossRepository.Get(id);
        }

        public async Task<IEnumerable<Floss>> GetAllFlosses()
        {
            return await FlossRepository.GetAll();
        }
    }
}
