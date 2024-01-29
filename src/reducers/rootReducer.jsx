import { combineReducers } from "redux"; // root reducer.
import filtersReducer from "../modules/ScenarioField/slices/filtersSlice";
import CurrentScenarioSlice from "../modules/ScenarioField/slices/CurrentScenarioSlice";
import testResultsSlice from "../modules/ScenarioField/slices/testResultsSlice";

const rootReducer = combineReducers({
    filters: filtersReducer,
    currentScenario: CurrentScenarioSlice,
    testResultsSlice: testResultsSlice,
});

export default rootReducer;
