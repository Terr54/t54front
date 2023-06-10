import { backend } from '..';
import { ApiResponse, CreateProductRequest, PagedProductListResponse, Place, Product, ProductListResponse, ProductResponse, ProductSampleRequest, ProductSampleRequestModel } from '../../domain/domain';
import { Category } from '../../types';
import { backendUrls } from '../urls';

export const getAllProductCategories = async () => await backend.get<ApiResponse<Category[]>>(backendUrls.product.CATEGORIES);

export const createProduct = async (request: CreateProductRequest) => await backend.post<ApiResponse<Product>>(backendUrls.product.CREATE, request);

export const listSupplyingProducts = async () => await backend.get<ApiResponse<ProductListResponse>>(backendUrls.product.LIST_SUPPLYING);

export const getAllAvailbleProducts = async (page: number = 0, size: number = 20) => await backend.get<ApiResponse<PagedProductListResponse>>(backendUrls.product.public.AVAILABLE, {
  params: {
    page,
    size
  }
});

export const findProductById = async (id: string) => await backend.get<ApiResponse<ProductResponse>>(backendUrls.product.public.$GET(id));

export const requestASample = async (request: Omit<ProductSampleRequest, 'address'> & {
  address?: Partial<Place>
}) => await backend
  .post<ApiResponse<ProductSampleRequestModel>>(backendUrls.product.public.REQUEST_A_SAMPLE, request);
