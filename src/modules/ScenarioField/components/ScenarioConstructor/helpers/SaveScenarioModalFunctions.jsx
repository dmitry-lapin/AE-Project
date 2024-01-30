import { saveAs } from 'file-saver';

// serialization JSON
const serializeFilters = (filters) => {
  return JSON.stringify(filters);
}

// deserialization JSON
const deserializeFilters = (filterString) => {
  return JSON.parse(filterString);
}

//Save scenario
export const SaveScenario = (selectedOption, filters) => { 
  if (selectedOption === 'In File') {
    const filtersString = serializeFilters(filters);

    const blob = new Blob([filtersString], { type: "text/plain;charset=utf-8" });

    saveAs(blob, "scenario.json");
  }
}
