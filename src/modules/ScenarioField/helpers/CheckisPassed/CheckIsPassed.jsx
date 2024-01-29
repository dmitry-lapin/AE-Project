// Function to apply a filter to JSON and return the result true or false

export const applyFilter = (json, filter) => {
    const { key, comparison, value } = filter;
  
    if (!json.hasOwnProperty(key)) {
      // If the key is not in the JSON, return false
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
  export const applyFiltersToJSON = (json, filters) => {
    return filters.map((filter) => applyFilter(json, filter));
  };