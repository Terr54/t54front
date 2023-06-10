import { backend } from '..';
import type { ApiResponse, MediaSlot } from '../../domain/domain';
import { backendUrls } from '../urls';

export const getAllUploadedMedia = async (page = 0, size = 20) => await backend.get<ApiResponse<MediaSlot[]>>(backendUrls.media.ALL, {
  params: {
    page,
    size
  }
});
