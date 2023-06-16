import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './todoSlice';
import { authReduser } from './auth/authSlise';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
    auth: authReduser,
  },
});
