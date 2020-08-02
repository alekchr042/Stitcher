using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using Stitcher.DataAccess.Model;

namespace Stitcher.Repository.Interfaces
{
    public interface IAuthRepository
    {
        Task<User> Register(User user, string password);
        Task<User> Login(string username, string password);
        Task<bool> UserExists(string username);
    }
}
