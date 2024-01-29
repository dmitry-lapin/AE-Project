import React from "react";
import { useSelector } from "react-redux";

const LogComponent = () => {
  const testResults = useSelector((state) => state.testResultsSlice);

  // Function to generate a text file for a specific test
  const generateTextFileForTest = (testIndex) => {
    const result = testResults[testIndex];
    const textData = `
                      Test ${testIndex + 1}:
                      Filters Used:
                      ${JSON.stringify(result.filtersUsed, null, 2)}

                      JSON Used:
                      ${JSON.stringify(result.jsonUsed, null, 2)}

                      Test Passed:
                      ${JSON.stringify(result.testPassed, null, 2)}
                    `;

    // Create a Blob object and a URL for downloading a text file
    const blob = new Blob([textData], { type: "text/plain" });
    const url = URL.createObjectURL(blob);

    // Create a link to download the file
    const a = document.createElement("a");
    a.href = url;
    a.download = `test_result_${testIndex + 1}.txt`;
    a.click();

    // Cleaning up the URL
    URL.revokeObjectURL(url);
  };

  return (
    <div className="mx-3 p-4">
      <h2 className="text-xl font-semibold mb-2">Test Results</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Index
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Test Passed
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Download Info
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {testResults.map((result, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                {result.testPassed.every((pass) => pass) ? "Passed" : "Failed"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full"
                  onClick={() => generateTextFileForTest(index)}
                >
                  Download
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LogComponent;
