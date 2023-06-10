import { createAsyncThunk, createSlice, isAnyOf, PayloadAction } from '@reduxjs/toolkit'
import { toast } from 'react-hot-toast'
import { isTokenNearExpiry, refreshJwt } from '../../../../api'
import { AuthUserResponse, JWTResponse, Place, SignUpSupplierRequest } from '../../../../domain/domain'
import {
  getUserInfo, signIn, signUp, signUpSupplier
} from '../../../../pages/auth/api'
import {
  clearLocalUser,
  setExpiresInSeconds, setJWT, setLocalUser, setRefreshToken
} from '../../../../storage/local.storage'
import type {
  ApiException,
  LoginUserRequest, SignUpUserRequest, User
} from '../../../../types'
import { AsyncState, retrieveErrorResponse } from '../../../util'
import { startLoading, stopLoading } from '../loader/loader.slice'
import { uploadProfilePicture } from '../../../../api/user'

export const getUser = createAsyncThunk('user/info', getUserInfo)

const postInfoActions = (userInfo: AuthUserResponse) => {
  // Save the user in local storage
  setLocalUser(userInfo);
  console.log(userInfo);
}

const postAuthActions = (jwt: JWTResponse) => {
  // Save the token in local storage
  setJWT(jwt?.accessToken);
  setRefreshToken(jwt?.refreshToken);
  setExpiresInSeconds(jwt?.expiresIn);
}

export const loginUserAction = createAsyncThunk('user/login', async (creds: LoginUserRequest, thunk) => {
  const { dispatch } = thunk;
  // Dispatch app loader
  dispatch(startLoading({ text: 'logging-you-in' }));
  try {
    const authResponse = await signIn(creds);
    postAuthActions(authResponse?.data?.content?.jwt);
    postInfoActions(authResponse?.data?.content);
    dispatch(stopLoading());
    return authResponse?.data?.content;
  } catch (e) {
    dispatch(stopLoading());
    return thunk.rejectWithValue(retrieveErrorResponse(e));
  }
})

export const registerUserAction = createAsyncThunk('user/register', async (creds: SignUpUserRequest, thunk) => {
  const { dispatch } = thunk;
  // Dispatch app loader
  dispatch(startLoading({ text: 'signing-you-up' }));
  try {
    const authResponse = await signUp(creds);
    postAuthActions(authResponse?.data?.content?.jwt);
    postInfoActions(authResponse?.data?.content);
    dispatch(stopLoading());
    toast.success('signup-success')
    return authResponse?.data?.content;
  } catch (e) {
    dispatch(stopLoading());
    return thunk.rejectWithValue(retrieveErrorResponse(e));
  }
});

export const uploadProfilePictureAction = createAsyncThunk('user/profile/picture', async (picture: File, thunk) => {
  const { dispatch } = thunk;
  const response = await uploadProfilePicture(picture);
  postInfoActions(response?.data?.content);
  toast.success('uploaded profile')
  return response.data.content;
});

export const registerSupplierAction = createAsyncThunk('user/register/supplier', async (
  creds: Omit<SignUpSupplierRequest, 'place'> & {
    place?: Partial<Place>
  }, thunk) => {
  const { dispatch } = thunk;
  // Dispatch app loader
  dispatch(startLoading({ text: 'signing-you-up' }));
  try {
    const authResponse = await signUpSupplier(creds);
    postAuthActions(authResponse?.data?.content?.jwt);
    postInfoActions(authResponse?.data?.content);
    dispatch(stopLoading());
    toast.success('signup-success')
    return authResponse?.data?.content;
  } catch (e) {
    dispatch(stopLoading());
    return thunk.rejectWithValue(retrieveErrorResponse(e));
  }
});

export const loadUserAction = createAsyncThunk('user/load', async () => {
  // Check if token has expired
  if (isTokenNearExpiry()) {
    await refreshJwt()
  }

  const userInfo = await getUserInfo();
  postInfoActions(userInfo.data.content);
  return userInfo.data.content;
});

const initialState: AsyncState<AuthUserResponse, ApiException> = {
  loading: false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUserInfo: (state, action: PayloadAction<AuthUserResponse>) => {
      state.payload = action.payload;
    },
    logout: (state) => {
      clearLocalUser()
      delete state.payload
    }
  },
  extraReducers (builder) {
    builder.addMatcher(isAnyOf(
      loginUserAction.pending,
      registerUserAction.pending,
      registerSupplierAction.pending
    ), (state) => {
      state.loading = true;
      state.errors = undefined;
    }).addMatcher(isAnyOf(
      loginUserAction.fulfilled,
      registerUserAction.fulfilled,
      registerSupplierAction.fulfilled,
      uploadProfilePictureAction.fulfilled
    ), (state, action) => {
      state.loading = false;
      state.payload = action.payload;
      state.errors = undefined;
    })
      .addMatcher(isAnyOf(
        loginUserAction.rejected,
        registerUserAction.rejected,
        registerSupplierAction.rejected,
        uploadProfilePictureAction.rejected
      ), (state, action) => {
        state.loading = false;
        state.errors = action.payload as ApiException[];
      })
  }
})

export const { setUserInfo } = userSlice.actions;
export const { logout } = userSlice.actions;
export default userSlice.reducer;
