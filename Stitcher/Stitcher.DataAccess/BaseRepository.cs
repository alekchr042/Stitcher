using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Stitcher.Repository
{
    public class BaseRepository<T>
    {
        private readonly AppDbContext db;

        public IMongoCollection<T> Collection { get; set; }
        public BaseRepository(AppDbContext db)
        {
            this.db = db;

            Collection = db.DbSet<T>();
        }

        public async Task<T> Get(Guid id)
        {
            var filterId = Builders<T>.Filter.Eq("id", id);
            return await Collection.Find(filterId).FirstOrDefaultAsync();
        }

        public async Task<IEnumerable<T>> GetAll()
        {
            return await Collection.Find(FilterDefinition<T>.Empty).ToListAsync();
        }
    }
}
