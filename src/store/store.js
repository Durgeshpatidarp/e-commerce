import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import productslice from "./productSlice"
const store = configureStore({
    reducer: {
        auth: authSlice,
        product: productslice,
    }
})
export default store;