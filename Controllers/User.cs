using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using CG_TechPro.Data;
using CG_TechPro.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace CG_TechPro.Controllers
{
    [ApiController]
    [Route("userdetails")]
    public class User : Controller
    {
        private readonly DataContext _context;

        public User(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public ActionResult<IEnumerable<Users>> GetUser(){
            var user = _context.Users.ToList();
            return user;
        }
    }
}