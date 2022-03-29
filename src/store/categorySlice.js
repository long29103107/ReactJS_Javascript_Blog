import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
};

export const categorySlice = createSlice({
  name: "category", 
  initialState,
  reducers: {
    getAllCategory: (state, action) => {
      state.username = action.payload;  
    },
  }
});

export const { getAllCategory } = categorySlice.actions;

export const selectNameCategory = state => state.category.name;

export default categorySlice.reducer;