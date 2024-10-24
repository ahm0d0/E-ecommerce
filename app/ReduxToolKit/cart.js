import { createSlice } from '@reduxjs/toolkit';

const CartListSlice = createSlice({
  name: 'CartList',
  initialState: {
    items: [], 
  },
  reducers: {
    addCartList: (state, action) => {
      state.items.push(action.payload); 
      
    },
    removeCartItem: (state, action) => {
      state.items = state.items.filter(product => product.id !== action.payload); 
    },
    updateCartList: (state, action) => {
      const index = state.items.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload; 
      }
    },
  },
});

export const { addCartList, removeCartItem, updateCartList } = CartListSlice.actions;
export default CartListSlice.reducer;