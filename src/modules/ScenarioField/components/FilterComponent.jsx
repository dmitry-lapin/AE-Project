import React, { useState } from "react";

const FilterComponent = ({ onAddFilter }) => {
  const [filter, setFilter] = useState({
    key: "",
    comparison: "",
    value: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFilter({
      ...filter,
      [name]: value,
    });
  };

  const handleAddFilter = () => {
    if (filter.key && filter.comparison && filter.value) {
      onAddFilter(filter);
      setFilter({
        key: "",
        comparison: "",
        value: "",
      });
    }
  };

  return (
    <div className="filter-generator space-x-2">
      <input
        type="text"
        name="key"
        value={filter.key}
        onChange={handleInputChange}
        placeholder="Key"
        className="p-1 border rounded focus:outline-none focus:border-blue-500"
      />
      <select
        name="comparison"
        value={filter.comparison}
        onChange={handleInputChange}
        className="p-1 border rounded focus:outline-none focus:border-blue-500"
      >
        <option value="=">=</option>
        <option value="!=">!=</option>
        <option value="&gt;">&gt;</option>
        <option value="&lt;">&lt;</option>
      </select>
      <input
        type="text"
        name="value"
        value={filter.value}
        onChange={handleInputChange}
        placeholder="Value"
        className="p-1 border rounded focus:outline-none focus:border-blue-500"
      />
      <button onClick={handleAddFilter} className="px-3 py-1 bg-blue-500 text-white rounded">
        Add filter
      </button>
    </div>
  );
};

export default FilterComponent;