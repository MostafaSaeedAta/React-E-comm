import { createSlice } from "@reduxjs/toolkit";

const fetchFromLocalStorage = () =>

const initialState = {
  carts: [],
  itemsCount: 0,
  totalAmount: 0,
  isCartMessage: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
      addToCart: ( state, action ) => {
        const isItemInCart = state.carts.find(item => item.id === action.payload);
        
        if(isItemInCart) {
          const tempCart = state.carts.map(item => {
            if(item.id === action.payload.id) {
              let tempQty = item.quantity + action.payload.quantity;
              let tempTotalPrice = tempQty * item.price;

              return {
                ... item, quantity: tempQty,totalPrice: tempTotalPrice
              }
            } else { 
              return item;
             }
          })
          state.carts = tempCart;
        } else {
          state.carts.push(action.payload);
        }
      }
    }
  } )

  export const {addToCart} = cartSlice.actions;
  export default cartSlice.reducer;