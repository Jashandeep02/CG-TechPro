using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CG_TechPro.Models
{
    public class Inventory
    {
        
        public int I_Id { get; set; }

        public int D_Id { get; set; }

        public required string  Serial_No { get; set; } 

        public int CreatedBy { get; set; }

        public char D_State { get; set; }
    }
}