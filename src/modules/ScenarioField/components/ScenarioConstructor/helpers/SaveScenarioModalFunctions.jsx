import { saveAs } from 'file-saver';
import { database } from '../../../../../firebase.config';
import { set, ref } from 'firebase/database';
// serialization JSON
const serializeFilters = (filters) => {
  return JSON.stringify(filters);
}

// deserialization JSON
const deserializeFilters = (filterString) => {
  return JSON.parse(filterString);
}

//Save scenario
export const SaveScenario = (selectedOption, filters, name='scenarioName') => {
  if (selectedOption === 'In File') {
    const filtersString = serializeFilters(filters);

    const blob = new Blob([filtersString], { type: "text/plain;charset=utf-8" });

    saveAs(blob, "scenario.json");
  } else if (selectedOption === 'In Database') {
    // Создайте ссылку на узел 'filters' с именем сценария
    set(ref(database, `filters/${name}`), filters);
  }
}