import { createSlice } from '@reduxjs/toolkit';
import { register } from './authOperations';

const initialState = {
  user: { name: null, number: null },
  token: null,
  isLoggedIn: false,
  isRefresher: false,
};

export const authSlise = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [register.fulfilled]: (state, { payload }) => {
      state.user = payload.user;
      state.token = payload.token;
      state.isLoggedIn = true;
    },
  },
});

export const authReduser = authSlise.reducer;
