using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CG_TechPro.Models
{
    public class Employee
    {
        
        public int Emp_Code { get; set; }

        public int U_Id { get; set; }

        public required string Name { get; set; }

        public DateTime CreatedAtUTC { get; set; }

        public DateTime UpdatedAtUTC { get; set; }

        public int CreatedBy { get; set; }

        public int UpdatedBy { get; set; }

        public bool IsAdmin { get; set; }
    }
}