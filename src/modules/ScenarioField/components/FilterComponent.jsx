import React, { useState } from "react";
import Select from "react-select";
import groupedOptions from "../helpers/CustomSelect/helpers/selectData";

const FilterComponent = ({ onAddFilter }) => {
  const [filter, setFilter] = useState({
    key: "",
    comparison: null,
    value: "",
  });

  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let trimmedValue = value;

    if (name === "key") {
      trimmedValue = value.trim();
      if (/^\d+$/.test(trimmedValue)) {
        setError("Key cannot be a single number");
      } else {
        setError(null);
      }
    }

    setFilter({
      ...filter,
      [name]: trimmedValue,
    });
  };

  const handleAddFilter = () => {
    if (filter.key && filter.comparison && filter.value) {
      if (/^\d/.test(filter.key)) {
        setError("Key cannot start with a number");
        return;
      }

      onAddFilter(filter);
      setFilter({
        key: "",
        comparison: null,
        value: "",
      });
      setError(null);
    } else {
      setError("Not all fields are filled in");
      setTimeout(() => {
        setError(null);
      }, 4000);
    }
  };

  return (
    <div className="flex flex-col space-y-2">
      <div className="flex space-x-2">
        <div className="w-2/12">
          <input
            type="text"
            name="key"
            value={filter.key}
            onChange={handleInputChange}
            placeholder="Key"
            className="w-full p-1.5 border-[1.5px] border-zinc-300 rounded ring-1 ring-transparent focus:ring-blue-500 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="w-3/12">
          <Select
            onChange={(selectedOption) => {
              const newValue = selectedOption ? selectedOption.value : null;
              setFilter({
                ...filter,
                comparison: newValue,
              });
            }}
            options={groupedOptions}
            isSearchable={true}
            placeholder="Select..."
            isClearable={true}
          />
        </div>
        <div className="w-2/12">
          <input
            type="text"
            name="value"
            value={filter.value}
            onChange={handleInputChange}
            placeholder="Value"
            className="w-full p-1.5 border-[1.5px] border-zinc-300 rounded ring-1 ring-transparent focus:ring-blue-500 focus:outline-none focus:border-blue-500"
          />
        </div>
        <button
          onClick={handleAddFilter}
          className="bg-zinc-700 w-1/12 rounded-full text-white hover:bg-zinc-800 border border-zinc-800"
        >
          <p>Add filter</p>
        </button>
      </div>

      {error && 
        <span className="ml-4 w-fit inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
          {error}
        </span>
      }
    </div>
  );
};

export default FilterComponent;
