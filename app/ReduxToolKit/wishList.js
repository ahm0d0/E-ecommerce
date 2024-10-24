import { createSlice } from '@reduxjs/toolkit';

const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState: {
    items: [], 
  },
  reducers: {
    addWishlist: (state, action) => {
      state.items.push(action.payload); 
      
    },
    removeWishlist: (state, action) => {
      state.items = state.items.filter(product => product.id !== action.payload); 
    },
    updateWishlist: (state, action) => {
      const index = state.items.findIndex(product => product.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload; 
      }
    },
  },
});

export const { addWishlist, removeWishlist, updateWishlist } = wishlistSlice.actions;
export default wishlistSlice.reducer;