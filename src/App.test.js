import { object1, object2 } from "./tests/testedObjects"
import { scenario } from "./tests/scenarioSample";
import { applyFiltersToJSON } from "./modules/ScenarioField/helpers/CheckisPassed/CheckIsPassed";

test('first object should be successfully checked, and return true.', () => {
    expect(applyFiltersToJSON(object1, scenario, true)).toBe(true);
})

test('second object should be successfully checked, and return false.', () => {
    expect(applyFiltersToJSON(object2, scenario, true)).toBe(false);
})