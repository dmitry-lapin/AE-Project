// Function for recursively searching for a value in a JSON object
const searchInJSON = (json, searchValue) => {
  if (typeof json === 'string') {
    // If the value is a string, check if it matches the search value
    return json.toLowerCase().includes(searchValue.toLowerCase());
  }

  if (typeof json === 'object') {
    for (const key in json) {
      const value = json[key];

      // Search recursively in nested objects and arrays
      if (searchInJSON(value, searchValue)) {
        return true; // Найдено совпадение
      }
    }
  }

  return false; // No match found
};

// Function to apply a filter to JSON and return the result true or false
export const applyFilter = (json, filter) => {
  const { key, comparison, value } = filter;

  if (comparison === "search") {
    // If the key is "searchIn", we search in the JSON object
    return searchInJSON(json, value);
  }

  if (!json.hasOwnProperty(key)) {
    // If the key is not in JSON, return false
    return false;
  }

  const jsonValue = json[key];

  switch (comparison) {
    case '==':
      return jsonValue == value;
    case '!=':
      return jsonValue != value;
    case '>':
      return jsonValue > value;
    case '<':
      return jsonValue < value;
    case '>=':
      return jsonValue >= value;
    case '<=':
      return jsonValue <= value;
    default:
      return false;
  }
};

// Function to apply a set of filters to JSON and return an array of results
export const applyFiltersToJSON = (json, filters, isTested = false) => {
  const results = filters.map((filter) => applyFilter(json, filter));

  if (isTested) {
    return results.every((result) => result === true);
  }

  return results;
};
