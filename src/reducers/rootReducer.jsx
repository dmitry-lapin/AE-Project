import { combineReducers } from "redux"; // root reducer.
import filtersReducer from "../modules/ScenarioField/slices/filtersSlice";

const rootReducer = combineReducers({
    filters: filtersReducer,
});

export default rootReducer;
