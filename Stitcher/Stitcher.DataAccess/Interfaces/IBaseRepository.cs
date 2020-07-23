using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Stitcher.Repository.Interfaces
{
    public interface IBaseRepository<T>
    {
        Task<T> Get(Guid id);

        Task<IEnumerable<T>> GetAll();
    }
}
