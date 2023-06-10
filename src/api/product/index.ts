import { backend } from '..';
import { ApiResponse, PagedStockVerificationResponse, ProductDetails, ProductResponse, ProductStock } from '../../domain/domain';
import { backendUrls } from '../urls';

export const addProductDetails = async (details: Partial<ProductDetails>) => await backend.post<ApiResponse<ProductResponse>>(backendUrls.product.DETAILS, details);

export const addProductMedia = async (productId: string, media: File) => {
  const data = new FormData();
  data.append('file', media);
  return await backend.post<ApiResponse<ProductResponse>>(backendUrls.product.MEDIA, data, {
    params: {
      productId
    }
  });
}

export const attachProductMedia = async (productId: string, mediaId: string) => await backend
  .post<ApiResponse<ProductResponse>>(backendUrls.product.$ATTACH_MEDIA(productId), { value: mediaId });

export const addProductInventory = async (stock: Partial<ProductStock>) => await backend.post<ApiResponse<ProductStock>>(backendUrls.product.INVENTORY, stock);

export const publishProductInventory = async (id: number) => await backend.post<ApiResponse<ProductStock>>(backendUrls.product.$PUBLISH_INVENTORY(id), {});

export const verifyProductInventory = async (id: number) => await backend.post<ApiResponse<ProductStock>>(backendUrls.product.$VERIFY_INVENTORY(id), {});

export const getById = async (id: string) => await backend.get<ApiResponse<ProductResponse>>(backendUrls.product.$GET(id));

export const listStockPendingVerification = async (page = 0, size = 100) => await backend.get<ApiResponse<PagedStockVerificationResponse>>(
  backendUrls.product.LIST_STOCK_PENDING_VERIFICATION, {
    params: {
      page, size
    }
  });
