using AutoMapper;
using Domain.Entities;
using Service.DTOs.CategoryDTOs;
using Service.DTOs.ProductDTOs;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Service.Helpers.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<Product, ProductDTO>().ReverseMap();
            CreateMap<Product, ProductCreateDTO>().ReverseMap();
            CreateMap<Product, ProductUpdateDTO>().ReverseMap();
            CreateMap<Product, ProductFeatureCreateDTO>().ReverseMap();
            CreateMap<ProductFeature, ProductFeatureCreateDTO>().ReverseMap();


            CreateMap<Category, CategoryDTO>().ReverseMap();
            CreateMap<Category, CategoryCreateDTO>().ReverseMap();
            CreateMap<Category, CategoryUpdateDTO>().ReverseMap();


            CreateMap<Category, CategoryUpdateDTO>().ReverseMap();
            CreateMap<Category, CategoryUpdateDTO>().ReverseMap();

        }
    }
}
