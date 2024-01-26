import { configureStore } from "@reduxjs/toolkit"; //Redux store.
import rootReducer from "../reducers/rootReducer";

const store = configureStore({
  reducer: rootReducer,
});

export default store;
