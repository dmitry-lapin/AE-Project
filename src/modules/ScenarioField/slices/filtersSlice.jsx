import { createSlice } from "@reduxjs/toolkit";

const filtersSlice = createSlice({
  name: "filters",
  initialState: [],
  reducers: {
    addFilter: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
