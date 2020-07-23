using Stitcher.DataAccess.Model;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace Stitcher.Services.Interfaces
{
    public interface IFlossService
    {
        Task<Floss> GetFloss(Guid id);

        Task<IEnumerable<Floss>> GetAllFlosses();
    }
}
