import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// axios.defaults.baseURL = 'https://6489a3a35fa58521caaffa14.mockapi.io';
const axiosTodos = axios.create({
  baseURL: 'https://6489a3a35fa58521caaffa14.mockapi.io',
});

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async (_, thunkAPI) => {
    try {
      const { data } = await axiosTodos.get('/todos');
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const addTodo = createAsyncThunk(
  'todo/addTodo',
  async (todo, thunkAPI) => {
    try {
      const { data } = await axiosTodos.post('/todos', todo);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const deleteTodo = createAsyncThunk(
  'todo/deleteTodo',
  async (id, thunkAPI) => {
    try {
      const { data } = await axiosTodos.delete(`/todos/${id}`);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);

export const editTodo = createAsyncThunk(
  'todo/editTodo',
  async (todo, thunkAPI) => {
    try {
      const { data } = await axiosTodos.put(`/todos/${todo.id}`, todo);
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err.message);
    }
  }
);
