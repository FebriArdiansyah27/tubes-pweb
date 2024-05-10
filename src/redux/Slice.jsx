import { createSlice } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const { product, selectedSize } = action.payload;
      const existingProductIndex = state.findIndex(
        (item) => item.id === product.id && item.size === selectedSize
      );
      if (existingProductIndex !== -1) {
        state[existingProductIndex].Quantity += 1;
      } else {
        state.push({ ...product, size: selectedSize, Quantity: 1 });
      }
    },
    updateSize: (state, action) => {
      const { id, newSize } = action.payload;
      const existingProduct = state.find((item) => item.id === id);
      if (existingProduct) {
        existingProduct.size = newSize;
      }
    },
    handleIncrease: (state, action) => {
      const existingProduct = state.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.Quantity += 1;
      }
    },
    handleDecrease: (state, action) => {
      const existingProduct = state.find(
        (item) => item.id === action.payload.id
      );
      if (existingProduct && existingProduct.Quantity > 1) {
        existingProduct.Quantity -= 1;
      }
    },
    handleRemove: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToCart, updateSize, handleIncrease, handleDecrease, handleRemove } =
  cartSlice.actions;

export default cartSlice.reducer;
