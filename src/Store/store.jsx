import { configureStore } from "@reduxjs/toolkit"
import  sidebarReducer from "./SideBarSlice"
import categoryReducer from "./CategorySlice"
import CategorySlice from "./CategorySlice";

const store = configureStore({
    reducer: {
        sidebar: sidebarReducer,
        category: categoryReducer
    }
})

export default store ; 