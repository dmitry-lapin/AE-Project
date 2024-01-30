import React, { useState } from "react";
import { SaveScenario } from "../helpers/SaveScenarioModalFunctions";
import { useSelector } from "react-redux";

const SaveScenarioModal = ({ setIsModalOpen }) => {
  const filters = useSelector((state) => state.currentScenario.filters);
  const [selectedOption, setSelectedOption] = useState(null);

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOption(null);
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur bg-gray-600/50">
      <div className="bg-white w-2/6 p-4 rounded-lg shadow-lg">
        <p className="text-xl font-semibold">Save Scenario</p>
        <p className="text-sm text-zinc-600 mb-4">Select a save option:</p>
        <div className="mx-4 space-y-1">
          <div className="flex space-x-2 text-white">
            <button
              className={`py-2 rounded-xl w-1/2 border-2 ${selectedOption === 'In Database' ? 'bg-blue-500 text-white' : 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white '} duration-100`}
              onClick={() => setSelectedOption('In Database')}
            >
              <p>In Database</p>
            </button>
            <button
              className={`py-2 rounded-xl w-1/2 border-2 ${selectedOption === 'In File' ? 'bg-blue-500 text-white' : 'border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white '} duration-100`}
              onClick={() => setSelectedOption('In File')}
            >
              <p>In File</p>
            </button>
          </div>
        </div>
        <div className="flex justify-end mt-4">
          <button className="bg-blue-500 text-white rounded-full px-4 py-1 mr-2" onClick={() => SaveScenario(selectedOption, filters)}>Save</button>
          <button className="text-blue-500 rounded-full px-4 py-1" onClick={closeModal}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default SaveScenarioModal;
