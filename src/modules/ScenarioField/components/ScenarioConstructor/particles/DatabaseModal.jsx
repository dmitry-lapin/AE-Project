import React, { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../../../../../firebase.config";
import { clearFilters, addFilter } from "../../../slices/CurrentScenarioSlice";
import { useDispatch } from "react-redux";

const DatabaseModal = ({ isDatabaseModalOpen, setIsDatabaseModalOpen }) => {
  const [filtersList, setFiltersList] = useState([]);
  const dispatch = useDispatch();

  const toggleDatabaseModal = () => {
    setIsDatabaseModalOpen(!isDatabaseModalOpen);
  }

  const handleUseFilter = (filter) => {
    dispatch(clearFilters());

    if (Array.isArray(filter)) {
        filter.forEach((parsedFilter) => {
          dispatch(addFilter(parsedFilter));
        });
      }
    toggleDatabaseModal();
  }

  useEffect(() => {
    const currentFiltersList = ref(database, 'filters');
    onValue(currentFiltersList, (snapshot) => {
      const filtersData = snapshot.val();
      if (filtersData) {
        const filtersArray = Object.entries(filtersData).map(([name, filter]) => ({ name, filter }));
        setFiltersList(filtersArray);
      }
    });
  }, []);

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur bg-gray-600/50">
      <div className="bg-white w-3/6 p-6 rounded-lg shadow-lg">
        <p className="text-xl font-semibold">Loaded scenario's from database</p>

        <table className="w-full mt-4">
          <thead>
            <tr className="border-b border-zinc-300">
              <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Index</th>
              <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Filter Name</th>
              <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody>
          {filtersList.map((filter, index) => (
              <tr key={filter.name} className="border-b border-zinc-300">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{filter.name}</td>
                <td className="p-2">
                  <button className="bg-blue-500 text-white rounded-full px-3 py-1" onClick={() => handleUseFilter(filter.filter)}>Use</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="flex justify-end mt-4">
          <button className="bg-blue-300 bg-opacity-50 text-blue-500 rounded-full px-4 py-1" onClick={toggleDatabaseModal}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export default DatabaseModal;
