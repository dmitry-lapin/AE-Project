import { createSlice } from '@reduxjs/toolkit';

const selectedFiltersSlice = createSlice({
  name: 'selectedFilters',
  initialState: [],
  reducers: {
    addFilter: (state, action) => {
      state.push(action.payload);
    },
    removeFilter: (state, action) => {
      state.splice(action.payload, 1);
    },
  },
});

export const { addFilter, removeFilter } = selectedFiltersSlice.actions;
export default selectedFiltersSlice.reducer;
