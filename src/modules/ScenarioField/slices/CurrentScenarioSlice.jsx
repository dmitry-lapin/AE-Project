import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
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

export const { addFilter, removeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;
