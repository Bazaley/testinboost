import { configureStore } from "@reduxjs/toolkit";
import { variantReducer } from "./variants/variantsSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { thunk } from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, variantReducer);

export const store = configureStore({
  reducer: {
    variants: persistedReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: () => [thunk],
});

export const persistor = persistStore(store);
