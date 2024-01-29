import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateJson, clearJson, clearFilters } from "../slices/CurrentScenarioSlice";
import { applyFiltersToJSON } from "../helpers/CheckisPassed/CheckIsPassed";
import { addTestResult } from "../slices/testResultsSlice";

const ObjectField = () => {
  const [jsonObject, setJsonObject] = useState(null);
  const filters = useSelector((state) => state.currentScenario.filters);
  const dispatch = useDispatch();
  const [fileInputKey, setFileInputKey] = useState(0); // Добавляем ключ для пересоздания input[type="file"]

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const parsedJson = JSON.parse(e.target.result);
          if (JSON.stringify(parsedJson).length <= 3000) {
            dispatch(updateJson(parsedJson));
            setJsonObject(parsedJson);
          } else {
            console.error("JSON file is too large.");
          }
        } catch (error) {
          console.error("Error parsing JSON:", error);
          setJsonObject(null);
        }
      };
      reader.readAsText(file);
    }
  };

  const handleApplyFilters = () => {
    if (jsonObject && filters.length > 0) {
      const results = applyFiltersToJSON(jsonObject, filters);
      console.log(results);

      // Создаем объект с результатом теста и добавляем его в testResultsSlice
      const testResult = {
        filtersUsed: filters,
        jsonUsed: jsonObject,
        testPassed: results // Если все фильтры пройдены
      };

      dispatch(addTestResult(testResult));

      // Очищаем currentScenario
      dispatch(clearFilters());
      dispatch(clearJson());
      setJsonObject(null);

      // Увеличиваем ключ для пересоздания input[type="file"]
      setFileInputKey((prevKey) => prevKey + 1);
    } else {
      console.log("JSON object or filters are missing.");
    }
  };

  const handleClearFile = () => {
    setJsonObject(null);
    dispatch(clearJson());

    // Увеличиваем ключ для пересоздания input[type="file"]
    setFileInputKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="flex flex-col w-5/12 space-y-2">
      <div>
        <p className="font-semibold text-xl">Select a JSON Object to check</p>
      </div>
      <div className="flex-grow p-4 border rounded-lg duration-100 bg-gray-200 border-gray-400 shadow-sm space-y-3">
        <div>
        </div>
        <div className="flex justify-between mr-6">
          <input
            key={fileInputKey} // Добавляем ключ для пересоздания input[type="file"]
            type="file"
            accept=".json"
            onChange={handleFileUpload}
            className=""
          />
          <button
            className="hover:text-red-500 duration-100"
            onClick={handleClearFile}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
            </svg>
          </button>
        </div>
        {jsonObject ? (
          <div className="space-y-4">
            <div className="bg-gray-700 text-white">
              <pre className="whitespace-pre-wrap max-h-48 overflow-y-scroll">
                {JSON.stringify(jsonObject, null, 2)}
              </pre>
            </div>
            <div className="flex justify-evenly">
              <button className="px-6 py-2  rounded-full text-white border bg-blue-500 hover:bg-blue-600" onClick={handleApplyFilters}>
                <p>Apply selected filters</p>
              </button>
            </div>
          </div>
        ) : (
          <p className="text-gray-500">
            Upload a JSON file to view its content.
          </p>
        )}
      </div>
    </div>
  );
};

export default ObjectField;
