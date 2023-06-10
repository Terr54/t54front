import { backend } from '../../../api';
import { backendUrls } from '../../../api/urls';
import { ApiResponse, Invitation, SupplierInviteRequest } from '../../../types';

export const inviteSuppliers = async (data: SupplierInviteRequest) => {
  return await backend.post<ApiResponse<Invitation[]>>(backendUrls.users.INVITE_SUPPLIER, data);
}

export const loadSupplierInvitations = async () => {
  return await backend.get<ApiResponse<Invitation[]>>(backendUrls.users.LIST_INVITATIONS);
}
