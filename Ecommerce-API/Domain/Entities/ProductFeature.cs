using Domain.Common;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain.Entities
{
    public class ProductFeature : BaseEntity
    {
        public int ProductId { get; set; }
        public string FeatureName { get; set; }
        public string FeatureValue { get; set; }
        public Product Product { get; set; }
    }
}
