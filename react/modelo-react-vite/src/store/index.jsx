// index.jsx
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // localStorage

// middleware customizado para log
const logger = (storeAPI) => (next) => (action) => {
  console.log('Dispatching action:', action);
  const result = next(action); // envia para o reducer
  console.log('Next state:', storeAPI.getState());
  return result;
};

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['auth'],
};

// Criar reducer persistido
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Criar store com middleware
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

// Criar persistor
export const persistor = persistStore(store);

export default store;
