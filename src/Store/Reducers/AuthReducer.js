import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {BASE_URL} from '../../App/api';
import {
  getDataByBody,
  getRequest,
  postRequest,
  putRequest,
} from '../../App/fetch';

const initialState = {
  userData: {},
  error: '',
  status: '',
};

// POST REQUEST
export const UserSignup = createAsyncThunk('UserSignup', async body => {
  const result = await postRequest(`${BASE_URL}/UserSignup`, body);
  return result;
});

export const UserLogin = createAsyncThunk('UserLogin', async body => {
  const result = await getDataByBody(`${BASE_URL}/UserLogin`, body);
  return result;
});

const AuthReducer = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {
    userDataFromAsyncStorage: (state, action) => {
      state.userData = action.payload;
    },
    removeUserDataFromAsyncStorage: (state, action) => {
      state.userData = {};
    },
  },
  extraReducers: {
    [UserSignup.pending]: (state, action) => {
      state.status = 'Pending';
    },
    [UserSignup.rejected]: (state, action) => {
      state.status = 'Error';
      state.error = action.payload;
    },
    [UserSignup.fulfilled]: (state, action) => {
      if (action.payload) {
        state.userData.push(action.payload);
        state.status = 'Ok';
        state.error = 'none';
      }
    },
    [UserLogin.pending]: (state, action) => {
      state.status = 'Pending';
    },
    [UserLogin.rejected]: (state, action) => {
      state.status = 'Error';
      state.error = action.payload;
    },
    [UserLogin.fulfilled]: (state, action) => {
      if (action.payload) {
        state.userData.push(action.payload);
        state.status = 'Ok';
        state.error = 'none';
      }
    },
  },
});

export default AuthReducer.reducer;
export const {userDataFromAsyncStorage, removeUserDataFromAsyncStorage} =
  AuthReducer.actions;
