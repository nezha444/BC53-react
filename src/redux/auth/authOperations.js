import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const axiosUser = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

const token = {
  set(token) {
    axiosUser.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axiosUser.defaults.headers.common.Authorization = '';
  },
};

export const register = createAsyncThunk(
  'user/signUp',
  async (user, thunkAPI) => {
    try {
      const { data } = await axiosUser.post('users/signup', user);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const refreshUser = createAsyncThunk(
  'user/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState()
    // console.log("thunkAPI.getState() = ",state)
    // console.log("thunkAPI.getState() = ",state.auth.token)
    const persistToken = state.auth.token 
    if(!persistToken) {
      return thunkAPI.rejectWithValue("No token")
    }    
    try {
      token.set(persistToken)
      const { data } = await axiosUser.get('/users/current');
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);