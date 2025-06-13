using Service.DTOs.ProductDTOs;
using Service.Helpers.Responses;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Services.Interfaces
{
    public interface IProductFeatureService
    {
        Task<CreateResponse> Create(ProductFeatureCreateDTO entity);
    }
}
