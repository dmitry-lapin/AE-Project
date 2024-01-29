import { createSlice } from '@reduxjs/toolkit';

const selectedFiltersSlice = createSlice({
  name: 'selectedFilters',
  initialState: {
    json: null,
    filters: [],
  },
  reducers: {
    addFilter: (state, action) => {
      state.filters.push(action.payload);
    },
    removeFilter: (state, action) => {
      state.filters.splice(action.payload, 1);
    },
    updateJson: (state, action) => {
      state.json = action.payload;
    },
    clearJson: (state) => {
      state.json = null;
    },
    clearFilters: (state) => {
      state.filters = [];
    }
  },
});

export const { addFilter, removeFilter, updateJson, clearJson, clearFilters } = selectedFiltersSlice.actions;
export default selectedFiltersSlice.reducer;