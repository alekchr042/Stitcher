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
        public ObjectId _id { get; set; }

        public int Id { get; set; }

        public string Number { get; set; }

        public string Name { get; set; }

        public string RGB { get; set; }

        public int R { get; set; }

        public int G { get; set; }

        public int B { get; set; }
    }
}
