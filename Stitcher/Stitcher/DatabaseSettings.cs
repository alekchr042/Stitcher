using System;
using System.Collections.Generic;
using System.Text;

namespace Stitcher.DataAccess
{
    public static class DatabaseSettings
    {
        public static string ConnectionString
        {
            get
            {
                return "mongodb+srv://olaAdmin:olciaolcia@stitcherdb.lzmcn.mongodb.net/Stitcher?retryWrites=true&w=majority";
            }
        }
    }
}
