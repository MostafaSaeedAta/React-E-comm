import { configureStore } from "@reduxjs/toolkit"
import  sidebarReducer from "./SideBarSlice"
import categoryReducer from "./CategorySlice"
import CategorySlice from "./CategorySlice";
import ProductReducer from "./ProductSlice"

const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        category: categoryReducer,
        product: ProductReducer
        
    }
})

export default store ; 