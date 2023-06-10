import { backend } from '..';
import { AuthUserResponse, PageCopy, ProductResponse, UserResponse } from '../../domain/domain';
import { ApiResponse } from '../../types';
import { backendUrls } from '../urls';

export const uploadProfilePicture = async (media: File) => {
  const data = new FormData();
  data.append('file', media);
  return await backend.post<ApiResponse<AuthUserResponse>>(backendUrls.users.UPLOAD_PROFILE_PICTURE, data);
}

export const attachProfilePicture = async (mediaId: string) => await backend
  .put<ApiResponse<AuthUserResponse>>(backendUrls.users.$ATTACH_PROFILE_PICTURE(mediaId));

export const listSuppliers = async (pageNumber: number = 0, pageSize: number = 20) => await backend
  .get<ApiResponse<PageCopy<UserResponse>>>(backendUrls.users.LIST_SUPPLIERS, { params: { pageNumber, pageSize } });
