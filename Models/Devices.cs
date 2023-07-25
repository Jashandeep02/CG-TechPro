using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CG_TechPro.Models
{
    public class Devices
    {
        
        public int D_Id { get; set; }

        public required string D_Type { get; set; }

        public int MyProperty { get; set; }

         public DateTime CreatedAtUTC { get; set; }

        public DateTime UpdatedAtUTC { get; set; }

        public int CreatedBy { get; set; }

        public int UpdatedBy { get; set; }
    }
}