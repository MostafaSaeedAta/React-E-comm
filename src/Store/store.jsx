import { configureStore } from "@reduxjs/toolkit"
import  sidebarReducer from "./SideBarSlice"
import categoryReducer from "./CategorySlice"
import CategorySlice from "./CategorySlice";
import ProductReducer from "./ProductSlice"
import cartReducer from './CartSlice'

const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        category: categoryReducer,
        product: ProductReducer,
        cart: cartReducer
        
    }
})

export default store ; 