import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './todoSlice';
import { authReducer } from './auth/authSlise';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'



import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
 

const persistConfig = {
  key: 'root',
  storage,
  whitelist :["token"],
}
const persistedReducer = persistReducer(persistConfig, authReducer)
 
export const store = configureStore({
  reducer: {
    todos: todosReducer,
    auth: persistedReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)