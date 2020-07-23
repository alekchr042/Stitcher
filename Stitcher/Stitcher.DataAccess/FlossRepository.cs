using Stitcher.DataAccess.Model;
using Stitcher.Repository.Interfaces;

namespace Stitcher.Repository
{
    public class FlossRepository : BaseRepository<Floss>, IFlossRepository
    {
        public FlossRepository(AppDbContext db) : base(db)
        {
        }
    }
}
