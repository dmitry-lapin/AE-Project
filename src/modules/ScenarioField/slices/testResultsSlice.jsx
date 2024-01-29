// testResultsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const testResultsSlice = createSlice({
  name: 'testResults',
  initialState: [],
  reducers: {
    addTestResult: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const { addTestResult } = testResultsSlice.actions;
export default testResultsSlice.reducer;
