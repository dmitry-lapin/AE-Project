import { combineReducers } from "redux"; // root reducer.
import filtersReducer from "../modules/ScenarioField/slices/filtersSlice";
import CurrentScenarioSlice from "../modules/ScenarioField/slices/CurrentScenarioSlice";

const rootReducer = combineReducers({
    filters: filtersReducer,
    currentScenario: CurrentScenarioSlice,
});

export default rootReducer;
