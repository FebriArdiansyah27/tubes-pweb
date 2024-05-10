import { createSlice } from "@reduxjs/toolkit";


export const whislist = createSlice({
  name: "whislist",
  initialState: [],
  reducers: {
    addToWhislist: (state, action) => {
      const existingProductIndex = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (existingProductIndex !== -1) {
        state[existingProductIndex];
      } else {
        state.push({ ...action.payload });
      }
    },
    handleRemovewhislist: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addToWhislist, handleRemovewhislist } = whislist.actions;

export default whislist.reducer;
