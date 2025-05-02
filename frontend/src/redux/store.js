import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "./slices/authSlice";

export const store = configureStore({
    reducer: {
        
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
            .concat(authApi.middleware),
})

setupListeners(store.dispatch);