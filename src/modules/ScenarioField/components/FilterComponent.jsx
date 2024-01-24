import React, { useState } from "react";

const FilterComponent = () => {
  const [selectedParameter, setSelectedParameter] = useState(""); 
  const [selectedComparison, setSelectedComparison] = useState(""); 
  const [inputValue, setInputValue] = useState(""); 

  const parameters = ["Name", "Age", "Gender"]; 

  const comparisons = {
    Name: ["="],
    Age: [">", "<"], 
    Gender: ["="], 
  };

  const handleParameterChange = (e) => {
    setSelectedParameter(e.target.value);
    setSelectedComparison("");
    setInputValue("");
  };

  return (
    <div className="rounded p-4 border">
      <h2 className="text-xl font-semibold mb-2">Filter generator</h2>
      <div className="mb-2">
        <label htmlFor="parameter" className="mr-2">
          Choose Parameter
        </label>
        <select
          id="parameter"
          value={selectedParameter}
          onChange={handleParameterChange}
          className="px-2 py-1 border rounded"
        >
          <option value="">Choose Parameter</option>
          {parameters.map((param) => (
            <option key={param} value={param}>
              {param}
            </option>
          ))}
        </select>
      </div>
      {selectedParameter && (
        <div className="mb-2">
          <label htmlFor="comparison" className="mr-2">
            Choose comparsion option:
          </label>
          <select
            id="comparison"
            value={selectedComparison}
            onChange={(e) => setSelectedComparison(e.target.value)}
            className="px-2 py-1 border rounded"
          >
            <option value="">Выберите опцию</option>
            {comparisons[selectedParameter].map((comp) => (
              <option key={comp} value={comp}>
                {comp}
              </option>
            ))}
          </select>
        </div>
      )}
      {selectedComparison && (
        <div className="mb-2">
          <label htmlFor="value" className="mr-2">
            Enter value: 
          </label>
          <input
            type="text"
            id="value"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="px-2 py-1 border rounded"
            placeholder="Введите значение"
          />
        </div>
      )}
      {selectedParameter && selectedComparison && inputValue && (
        <div>
          <p>Selected param: {selectedParameter}</p>
          <p>Selected comparsion option: {selectedComparison}</p>
          <p>selected value: {inputValue}</p>
        </div>
      )}
    </div>
  );
};

export default FilterComponent;
