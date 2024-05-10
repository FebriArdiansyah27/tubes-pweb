import { createSlice } from "@reduxjs/toolkit";

export const sizeSlice = createSlice({
  name: 'size',
  initialState: '',
  reducers: {
    addToSize: (state, action) => {
      console.log(state , action.payload);
      state = action.payload; // Incorrect, this doesn't update the state
      // Corrected: Modify state value
      return action.payload;
    },
  },
});

export const { addToSize } = sizeSlice.actions;

export default sizeSlice.reducer;
