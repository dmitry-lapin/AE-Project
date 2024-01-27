import { createSlice } from "@reduxjs/toolkit";

const currentScenarioSlice = createSlice({
  name: "ScenarioFiltersChain",
  initialState: [],
  reducers: {
    addFilter: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addFilter } = filtersSlice.actions;

export default filtersSlice.reducer;
