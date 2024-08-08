import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from '@/redux/Slices/products/products';
import { loginApi } from './Slices/login/login';

export const makeStore = () => {
  return configureStore ({
    reducer: {
      [productsApi.reducerPath]: productsApi.reducer,
      [loginApi.reducerPath]:loginApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(productsApi.middleware).concat(loginApi.middleware),
  })
}


// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']