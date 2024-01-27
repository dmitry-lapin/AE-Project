import { createSlice } from '@reduxjs/toolkit';

const selectedFiltersSlice = createSlice({
  name: 'selectedFilters',
  initialState: [],
  reducers: {
    addFilter: (state, action) => {
      state.push(action.payload);
    },
    removeFilter: (state, action) => {
      return state.filter(filter => filter.id !== action.payload.id);
    },
  },
});

export const { addFilter, removeFilter } = selectedFiltersSlice.actions;
export default selectedFiltersSlice.reducer;
