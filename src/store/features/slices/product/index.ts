import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductListResponse, Product, CreateProductRequest, ProductResponse, ProductDetails, ProductStock } from '../../../../domain/domain';
import { ApiException } from '../../../../types';
import { type AsyncState, retrieveErrorResponse } from '../../../util';
import { listSupplyingProducts, createProduct } from '../../../../api/common';
import { addProductDetails, addProductInventory, addProductMedia, publishProductInventory } from '../../../../api/product';

const initialState: AsyncState<ProductListResponse, Partial<ApiException>> = {
  loading: false,
  payload: {
    products: [],
    productDetails: {},
    productStocks: {},
    mediaSlots: {}
  }
};

export const loadSupplierProductsAction = createAsyncThunk('products/supplying', async () => {
  const response = await listSupplyingProducts();
  return response.data.content;
});

export const createProductAction = createAsyncThunk('products/create', async (request: CreateProductRequest) => {
  const response = await createProduct(request);
  return response.data.content
});

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    updateProduct (state, action: PayloadAction<ProductResponse>) {
      if (state?.payload?.products) {
        const index = state.payload.products.findIndex(p => p.id === action.payload?.product?.id);
        if (index > -1) {
          state.payload.products[index] = action.payload.product;
        } else {
          state.payload.products.push(action.payload.product);
        }
        state.payload.mediaSlots[action.payload.product.id] = action.payload.mediaSlots;
        state.payload.productDetails[action.payload.product.id] = action.payload.productDetails;
        state.payload.productStocks[action.payload.product.id] = action.payload.productStocks;
      } else if (state.payload) {
        state.payload.products = [action.payload.product];
        state.payload.mediaSlots[action.payload.product.id] = action.payload.mediaSlots;
        state.payload.productDetails[action.payload.product.id] = action.payload.productDetails;
        state.payload.productStocks[action.payload.product.id] = action.payload.productStocks;
      }
    },
    updateProductStock (state, action: PayloadAction<ProductStock>) {
      const stock = action.payload;
      if (state?.payload?.productStocks) {
        const index = state.payload.productStocks[stock?.productId]?.findIndex(p => p.id === stock.id);
        if (index > -1) {
          state.payload.productStocks[stock?.productId][index] = action.payload;
        } else if (state.payload?.productStocks[stock?.productId]) {
          state.payload.productStocks[stock?.productId]?.push(action.payload);
        } else {
          state.payload.productStocks[stock?.productId] = [action.payload];
        }
      } else if (state.payload) {
        state.payload.productStocks = { [stock.productId]: [action.payload] };
      }
    }
  },
  extraReducers: (builder) => {
    builder.addCase(loadSupplierProductsAction.pending, (state) => {
      state.loading = true;
    }).addCase(loadSupplierProductsAction.fulfilled, (state, action) => {
      state.loading = false;
      state.payload = action.payload ?? initialState.payload;
    }).addCase(loadSupplierProductsAction.rejected, (state) => {
      state.loading = false;
      state.errors = [{ message: 'failed to load supplying products' }]
    }).addCase(createProductAction.fulfilled, (state, action) => {
      if (state?.payload?.products) {
        state.payload.products.push(action.payload);
      } else if (state.payload) {
        state.payload.products = [action.payload];
      }
    })
  }
});

export const { updateProduct, updateProductStock } = productSlice.actions;

export const addProductMediaAction = createAsyncThunk('product/media/add', async ({ id, media }: { id: string, media: File }, thunk) => {
  const { dispatch } = thunk;
  const response = await addProductMedia(id, media);
  dispatch(updateProduct(response.data.content));
  return response.data.content;
});

export const addProductDetailsAction = createAsyncThunk('product/details/add', async (details: Partial<ProductDetails>, thunk) => {
  const { dispatch } = thunk;
  const response = await addProductDetails(details);
  dispatch(updateProduct(response.data.content));
  return response.data.content;
});

export const addProductInventoryAction = createAsyncThunk('product/inventory/add', async (stock: Partial<ProductStock>, thunk) => {
  const { dispatch } = thunk;
  const response = await addProductInventory(stock);
  dispatch(updateProductStock(response.data.content));
  return response.data.content;
});

export const publishProductInventoryAction = createAsyncThunk('product/inventory/publish', async (id: number, thunk) => {
  const { dispatch } = thunk;
  const response = await publishProductInventory(id);
  dispatch(updateProductStock(response.data.content));
  return response.data.content;
});

export default productSlice.reducer;
