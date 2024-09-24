import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import authReducer from "./api/slices/authSlice"; // your auth slice
import { baseApi } from "./api/baseApi";

// Configuration for persisting the auth state in localStorage
const persistConfig = {
  key: "auth",
  storage,
  whitelist: ["auth"], 
};

// Combine all  reducers
const rootReducer = combineReducers({
  [baseApi.reducerPath]: baseApi.reducer,
  auth: authReducer, // this is the Persisted reducer
});

// Wrap  authReducer with persistReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure  Redux store
export const store = configureStore({
  reducer: persistedReducer, 
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false, 
    }).concat(baseApi.middleware),
});


export const persistor = persistStore(store);


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
