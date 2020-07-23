using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;
using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Stitcher.DataAccess.Model
{
    [Table("Floss")]
    public class Floss
    {
        [BsonId]
        public ObjectId Id { get; set; }

        public string ColorNumber { get; set; }

        public string ColorName { get; set; }

        public string Brand { get; set; }
    }
}
