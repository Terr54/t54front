import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getAllProductCategories } from '../../../../api/common';
import { Category } from '../../../../domain/domain';
import { ApiException } from '../../../../types';
import { AsyncState } from '../../../util';

export const loadAllProductCategories = createAsyncThunk('product/categories', async () => {
  const res = await getAllProductCategories();
  return res.data.content;
});

const initialState: AsyncState<Category[], ApiException> = {
  loading: false
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadAllProductCategories.fulfilled, (state, action) => {
      state.payload = action.payload
    });
  }
});

export default categoriesSlice.reducer;
