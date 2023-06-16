import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const axiosUser = axios.create({
  baseURL: 'https://connections-api.herokuapp.com/',
});

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
