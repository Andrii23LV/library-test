import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { useDispatch, TypedUseSelectorHook, useSelector } from "react-redux";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import booksReducer from "./reducers/bookSlice";

const booksPersistConfig = {
    key: "books",
    storage: storage,
    whitelist: ["booksState"],
};

const rootReducer = combineReducers({
    books: persistReducer(booksPersistConfig, booksReducer),
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ serializableCheck: false }),
});

// export const store = configureStore({
//     reducer: {
//         books: booksReducer,
//     },
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({ serializableCheck: false }),
// });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;