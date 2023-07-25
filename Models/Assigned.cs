using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CG_TechPro.Models
{
    public class Assigned
    {
        
        public int I_Id { get; set; }

        public int Emp_Code { get; set; }

        public int D_Id { get; set; }

        public int MyProperty { get; set; }

         public DateTime AssignedAtUTC { get; set; }

         public int AssignedBy { get; set; }
    }
}