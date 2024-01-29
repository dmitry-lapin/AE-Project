// Function to apply a filter to JSON and return the result true or false

// Функция для рекурсивного поиска ключа и значения в JSON-объекте
const searchInJSON = (json, searchKey, searchValue) => {
  for (const key in json) {
    if (key === searchKey && json[key].toString().toLowerCase().includes(searchValue.toLowerCase())) {
      return true; // Найдено совпадение
    }

    if (typeof json[key] === "object" && !Array.isArray(json[key])) {
      // Рекурсивно ищем во вложенных объектах
      if (searchInJSON(json[key], searchKey, searchValue)) {
        return true; // Найдено совпадение во вложенных объектах
      }
    }
  }

  return false; // Совпадение не найдено
};

export const applyFilter = (json, filter) => {
    const { key, comparison, value } = filter;
  
    if (!json.hasOwnProperty(key)) {
      // If the key is not in the JSON, return false
      return false;
    }
  
    const jsonValue = json[key];

    if (key === "searchIn") {
      // Если ключ "searchIn", выполняем поиск в JSON-объекте
      return searchInJSON(jsonValue, key, value);
    }
  
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