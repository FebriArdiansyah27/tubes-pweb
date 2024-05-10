import { configureStore } from '@reduxjs/toolkit';
import cartSlice from "./Slice.jsx";
import whislist from './WhislistSlice.jsx';
import Size from "./Size.jsx"

export default configureStore({
  reducer: {
    cartSlice,
    whislist,
    Size
  }
});
