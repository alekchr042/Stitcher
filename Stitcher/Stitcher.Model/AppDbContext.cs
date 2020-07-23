using MongoDB.Driver;
using Stitcher.DataAccess.Model;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;

namespace Stitcher
{
    public class AppDbContext
    {
        private readonly IMongoDatabase _db;

        public AppDbContext(IMongoClient client, string dbName)
        {
            _db = client.GetDatabase(dbName);
        }

        public IMongoCollection<T> DbSet<T>()
        {
            var table = typeof(T).GetCustomAttribute<TableAttribute>(false).Name;
            return _db.GetCollection<T>(table);
        }

        public IMongoCollection<Floss> Flosses => _db.GetCollection<Floss>("Floss");
    }
}
