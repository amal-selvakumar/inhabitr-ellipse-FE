import { configureStore } from '@reduxjs/toolkit'
import { productsApi } from '@/redux/Slices/products/products';
import { loginApi } from './Slices/login/login';
import { propertyApi } from './Slices/property/property';
import dataReducer from './Reducers/property';
import furnitureReducer from './Reducers/furnitures'

export const makeStore = () => {
  return configureStore({
    reducer: {
      [productsApi.reducerPath]: productsApi.reducer,
      [loginApi.reducerPath]: loginApi.reducer,
      [propertyApi.reducerPath]: propertyApi.reducer,
      data: dataReducer,
      furniture:furnitureReducer
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware()
        .concat(productsApi.middleware)
        .concat(loginApi.middleware)
        .concat(propertyApi.middleware),
  })
}


// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']