using AutoMapper;
using Domain.Entities;
using Service.DTOs.CategoryDTOs;
using Service.DTOs.ProductDTOs;
using Service.DTOs.ProductFeature;
using Service.DTOs.ProductTypeDTOs;

namespace Service.Helpers.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
            CreateMap<ProductFeature, ProductFeatureDTO>().ReverseMap();

            CreateMap<Product, ProductDTO>()
                .ForMember(mbox => mbox.CategoryName, mbox => mbox.MapFrom(src => src.Category.Name))
                .ForMember(mbox => mbox.Features, mbox => mbox.MapFrom(src => src.Features));
            CreateMap<ProductDTO, Product>();
            CreateMap<ProductCreateDTO, Product>()
                .ForMember(mbox => mbox.Features, mbox => mbox.MapFrom(src => src.Features));
            CreateMap<Product, ProductCreateDTO>();
            CreateMap<ProductUpdateDTO, Product>()
                .ForMember(mbox => mbox.Features, mbox => mbox.MapFrom(src => src.Features));
            CreateMap<Product, ProductUpdateDTO>();
            CreateMap<Category, CategoryDTO>().ReverseMap();
            CreateMap<ProductType, ProductTypeDTO>().ReverseMap();
        }
    }
}
