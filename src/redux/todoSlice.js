import { createSlice } from '@reduxjs/toolkit';
import { addTodo, deleteTodo, editTodo, fetchTodos } from './operations';

const initialState = {
  items: [],
  isEditing: false,
  currentTodo: { text: '', id: null },
  isLoading: false,
};
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    editTodos(state, { payload }) {
      state.items = state.items.map(el =>
        el.id === state.currentTodo.id ? { ...el, text: payload } : el
      );
    },
    setIsEditing(state) {
      state.isEditing = !state.isEditing;
    },
    addCurrentTodo(state, action) {
      state.currentTodo = action.payload;
    },
  },
  extraReducers: {
    [fetchTodos.pending]: state => {
      state.isLoading = true;
    },
    [fetchTodos.fulfilled]: (state, action) => {
      state.items = action.payload;
      state.isLoading = false;
    },
    [addTodo.pending]: state => {
      state.isLoading = true;
    },
    [addTodo.fulfilled]: (state, action) => {
      state.items.push(action.payload);
      state.isLoading = false;
    },
    [deleteTodo.pending]: state => {
      state.isLoading = true;
    },
    [deleteTodo.fulfilled]: (state, action) => {
      state.items = state.items.filter(todo => todo.id !== action.payload.id);
      state.isLoading = false;
    },
    [editTodo.pending]: state => {
      state.isLoading = true;
    },
    [editTodo.fulfilled]: (state, action) => {
      state.items = state.items.map(el =>
        el.id === action.payload.id ? { ...el, text: action.payload.text } : el
      );
      state.isLoading = false;
    },
  },
});

export const {
  addTodos,
  deleteTodos,
  editTodos,
  setIsEditing,
  addCurrentTodo,
} = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
