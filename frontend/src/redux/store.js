import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { quizApi } from "./slices/quizSlice";
import { authApi } from "./slices/authSlice";
import { userApi } from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    [quizApi.reducerPath]: quizApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      quizApi.middleware,
      authApi.middleware,
      userApi.middleware
    ),
});

setupListeners(store.dispatch);
