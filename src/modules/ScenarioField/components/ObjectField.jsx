import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const ObjectField = () => {
  const [jsonObject, setJsonObject] = useState(null);
  const currentScenario = useSelector((state) => state.currentScenario);

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const parsedJson = JSON.parse(e.target.result);
          setJsonObject(parsedJson);
        } catch (error) {
          console.error("Error parsing JSON:", error);
          setJsonObject(null);
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div className="flex flex-col w-5/12 space-y-2">
      <div>
        <p className="font-semibold text-xl">Select a JSON Object to check</p>
      </div>
      <div className="flex-grow p-4 border rounded-lg duration-100 bg-gray-200 border-gray-400 shadow-sm space-y-3">
        <input
          type="file"
          accept=".json"
          onChange={handleFileUpload}
          className=""
        />
        {jsonObject ? (
          <div className="bg-gray-700 text-white">
            <pre className="whitespace-pre-wrap max-h-48 overflow-y-scroll">
              {JSON.stringify(jsonObject, null, 2)}
            </pre>
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
