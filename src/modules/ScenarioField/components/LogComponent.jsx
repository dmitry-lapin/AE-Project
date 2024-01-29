import React, { useState } from "react";
import { useSelector } from "react-redux";

const LogComponent = () => {
  const testResults = useSelector((state) => state.testResultsSlice);

  // Создаем состояние для отслеживания свернутых/развернутых строк
  const [expandedRows, setExpandedRows] = useState([]);

  // Функция для обработки клика на кнопке разворачивания/сворачивания строки
  const toggleRow = (index) => {
    if (expandedRows.includes(index)) {
      setExpandedRows(expandedRows.filter((rowIndex) => rowIndex !== index));
    } else {
      setExpandedRows([...expandedRows, index]);
    }
  };

  return (
    <div className="mx-3 p-4">
      <h2 className="text-xl font-semibold mb-2">Test Results</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Filters Used
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              JSON Used
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Test Passed
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {testResults.map((result, index) => (
            <React.Fragment key={index}>
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    className="text-blue-500"
                    onClick={() => toggleRow(index)}
                  >
                    {expandedRows.includes(index) ? "Свернуть" : "Развернуть"}
                  </button>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <pre>{JSON.stringify(result.filtersUsed, null, 2)}</pre>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {expandedRows.includes(index) ? (
                    <pre>{JSON.stringify(result.jsonUsed, null, 2)}</pre>
                  ) : (
                    <p>{result.testPassed.every((passed) => passed) ? "Пройден" : "Не пройден"}</p>
                  )}
                </td>
              </tr>
              {expandedRows.includes(index) && (
                <tr>
                  <td colSpan="3">
                    <div className="px-6 py-4 whitespace-nowrap">
                      {/* Дополнительные детали, которые будут отображены при разворачивании строки */}
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LogComponent;
