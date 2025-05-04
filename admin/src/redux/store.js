import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { authApi } from "./slices/authSlice";
import { quizApi } from "./slices/quizSlice";

export const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        [quizApi.reducerPath]: quizApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware()
            .concat(authApi.middleware)
            .concat(quizApi.middleware),
})

setupListeners(store.dispatch);