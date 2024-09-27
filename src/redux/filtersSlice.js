import { createSlice } from "@reduxjs/toolkit";
export const selectNameFilter  = (state)=>state.filters.filterItems;
const slice = createSlice({
  initialState: {
    filterItems: ''
  },
  name: "filters",
  reducers: {
    changeFilter: (state, action) => {
      state.filterItems = action.payload;
    }
  }
});

export const {changeFilter} = slice.actions;
export default slice.reducer;