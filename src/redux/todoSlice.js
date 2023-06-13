import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isEditing: false,
  currentTodo:{text:"", id:null},
};
const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodos(state, action) {
      state.items.push(action.payload);
    },

    deleteTodos(state, action) {
      state.items = state.items.filter(todo => todo.id !== action.payload);
    },
    editTodos(state, {payload}) {
      state.items = state.items.map(el =>
              el.id === state.currentTodo.id ? { ...el, text: payload } : el
            )
    },
    setIsEditing(state) {
      state.isEditing = !state.isEditing;
    },
    addCurrentTodo(state, action) {
      state.currentTodo = action.payload;
    }
  },
});

export const { addTodos, deleteTodos, editTodos, setIsEditing, addCurrentTodo } = todosSlice.actions;
export const todosReducer = todosSlice.reducer;
