import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { loadSupplierInvitations } from '../../../../pages/admin/apis/admin.apis';
import { ApiException, Invitation } from '../../../../types';
import { AsyncState } from '../../../util';
import { PageCopy, UserResponse } from '../../../../domain/domain';
import { listSuppliers } from '../../../../api/user';

export const loadSupplierInvitationsAction = createAsyncThunk('suppliers/invitation', async () => {
  const suppliers = await loadSupplierInvitations();
  return suppliers.data.content;
});
export const loadSuppliersAction = createAsyncThunk('suppliers/load', async ({ pageNumber = 0, pageSize = 20 }: { pageNumber: number, pageSize: number }) => {
  const response = await listSuppliers(pageNumber, pageSize);
  return response.data.content;
});
const initialState: AsyncState<{
  pending: Invitation[],
  accepted: PageCopy<UserResponse> | null,
}, ApiException> = {
  loading: false,
  payload: {
    pending: [],
    accepted: null
  }
}
export const supplierSlice = createSlice({
  name: 'supplier',
  initialState,
  reducers: {
    setSupplierInvitations: (state, action: PayloadAction<Invitation[]>) => {
      if (state.payload) {
        state.payload.pending = action.payload;
      }
    },
    addSupplierInvitations: (state, action: PayloadAction<Invitation[]>) => {
      if (state.payload) {
        const sup: Record<string, Invitation> = {};
        for (const s of state.payload.pending) {
          sup[s.id] = s;
        }
        for (const a of action.payload) {
          sup[a.id] = a;
        }
        state.payload.pending = Object.values(sup);
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loadSupplierInvitationsAction.fulfilled, (state, action) => {
      if (state.payload) {
        state.payload.pending = action.payload;
      }
    }).addCase(loadSuppliersAction.fulfilled, (state, action) => {
      if (state.payload) {
        if (state.payload.accepted == null) {
          if (action.payload) {
            state.payload.accepted = action.payload;
          }
        } else {
          const content = state.payload.accepted.content ?? [];
          if (action.payload) {
            state.payload.accepted = action.payload;
            state.payload.accepted.content = [...content, ...(state.payload.accepted.content ?? [])];
          }
        }
      }
    })
  }
});

export const { setSupplierInvitations, addSupplierInvitations } = supplierSlice.actions;
export default supplierSlice.reducer;
