using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CG_TechPro.Models
{
    public class Users
    {
        public int Id { get; set; }

        public required string UserName { get; set; }

        public required string Password { get; set; }

        
    }
}