import { configureStore } from "@reduxjs/toolkit"
import  sidebarReducer from "./SideBarSlice"

const store = configureStore({
    reducer: {
        sidebar: sidebarReducer
    }
})

export default store ; 