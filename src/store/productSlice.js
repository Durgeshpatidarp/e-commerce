import { createSlice } from "@reduxjs/toolkit";

const Productslice = createSlice({
    name: "product",
    initialState: {
        products: [],
    },
    reducers: {
        add(state, action) {
            state.products.push(action.payload);
            const products = JSON.parse(localStorage.getItem("products"));

            if (products && products.length > 0) {
                products.push(action.payload);
                const convertedproducts = JSON.stringify(products);
                localStorage.setItem("products", convertedproducts);
            } else {
                let products = [];
                products.push(action.payload);
                products = JSON.stringify(products);
                localStorage.setItem("products", products);
            }
        },
        productdelete: (state, action) => {
            state.products = state.products.filter(product => product.id !== action.payload);
            localStorage.setItem("products", JSON.stringify(state.products));
        }
    }
})
export const { add } = Productslice.actions;
export const { productdelete } = Productslice.actions;
export default Productslice.reducer;

