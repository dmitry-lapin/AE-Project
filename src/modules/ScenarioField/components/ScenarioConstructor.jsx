import React, { useState } from "react";
import DragndropImage from '../../../media/dragndrop.png';
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from 'react-redux';
import { addFilter, removeFilter, clearFilters } from '../slices/CurrentScenarioSlice';
import SaveScenarioModal from "./ScenarioConstructor/particles/SaveScenarioModal";
import DatabaseModal from "./ScenarioConstructor/particles/DatabaseModal";

const ScenarioConstructor = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.currentScenario.filters);
  const [isDatabaseModalOpen, setIsDatabaseModalOpen] = useState(false);

  const isFilterDuplicate = (newFilter, existingFilters) => {
    return existingFilters.some(
      (existingFilter) =>
        existingFilter.key === newFilter.key &&
        existingFilter.comparison === newFilter.comparison
    );
  };

  const [{ canDrop, isOver }, ref] = useDrop({
    accept: "BLOCK",
    drop: (item) => {
      item = item.filter;
      // Check: is duplicate?
      const isDuplicate = isFilterDuplicate(item, filters);
      if (isDuplicate) {
        console.log("Filter with the same key and comparison already exists");
      } else {
        dispatch(addFilter(item));
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop(),
    })
  });

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRemoveClick = (index) => {
    dispatch(removeFilter(index));
  }

  const isActive = canDrop && isOver;
  let backgroundColor = `bg-gray-200 border-gray-400 shadow-sm`
  if (isActive) {
    backgroundColor = `bg-gray-300 border-gray-500 shadow-lg`
  } else if (canDrop) {
    backgroundColor = `bg-gray-300 border-gray-500 shadow-md`
  }

  const openModal = () => {
    setIsModalOpen(true);
  }

  const isSaveDisabled = filters.length === 0; // to disable a button when filters lenght == 0;

  const handleFileChange = (e) => {
    dispatch(clearFilters());
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      const reader = new FileReader();
  
      reader.onload = (e) => {
        const fileContents = e.target.result;
  
        try {
          const parsedFilters = JSON.parse(fileContents);
          
          // Проверьте, что parsedFilters является массивом
          if (Array.isArray(parsedFilters)) {
            // Пройдитесь по каждому фильтру и добавьте его в массив filters
            parsedFilters.forEach((parsedFilter) => {
              dispatch(addFilter(parsedFilter));
            });
          } else {
            console.error('Файл не содержит массив фильтров.');
          }
        } catch (error) {
          console.error('Ошибка при чтении файла:', error);
        }
      };
  
      reader.readAsText(selectedFile);
    }
  };
  
  const toggleDatabaseModal = () => {
    setIsDatabaseModalOpen(!isDatabaseModalOpen);
  }

  return (
    <>
      <div className="flex flex-col w-6/12 space-y-2">
        <div className="flex justify-between">
          <p className="font-semibold text-xl">Construct your scenario below</p>
          <label className="custom-file-input">
            <div className="flex space-x-3 mr-5">
              <div>
                <input
                type="file"
                accept=".json"
                onChange={handleFileChange}
                style={{ display: "none" }} // hide standart input
                />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="cursor-pointer w-6 h-6 hover:text-blue-500 duration-100">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 0 0-1.883 2.542l.857 6a2.25 2.25 0 0 0 2.227 1.932H19.05a2.25 2.25 0 0 0 2.227-1.932l.857-6a2.25 2.25 0 0 0-1.883-2.542m-16.5 0V6A2.25 2.25 0 0 1 6 3.75h3.879a1.5 1.5 0 0 1 1.06.44l2.122 2.12a1.5 1.5 0 0 0 1.06.44H18A2.25 2.25 0 0 1 20.25 9v.776" />
                </svg>
              </div>
              <div>
                <button onClick={toggleDatabaseModal}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 hover:text-blue-500 duration-100">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z" />
                  </svg>

                </button>
              </div>
            </div>
          </label>
        </div>
        <div ref={ref} className={`flex-grow border border-dashed rounded-lg duration-100 ` + backgroundColor}>
          {filters.length === 0 ? (
            <div className="flex flex-col items-center py-16 space-y-3">
              <img src={DragndropImage} alt="drag'n'drop"/>
              <p className="font-normal text-lg text-zinc-600">Drop your first <span className="font-bold">filter</span> here.</p>
            </div>
          ) : (
            <div className=" pt-2 pb-4 px-4 font-normal">
              {filters.map((filter, index) => (
                <button key={index} className="m-1 px-4 relative bg-white border border-gray-300 shadow-md rounded-full duration-100 py-2 overflow-hidden" onClick={() => handleRemoveClick(index)}>
                  {`${filter.key} ${filter.comparison} ${filter.value}`}
                  <span className=" absolute inset-0 flex items-center justify-center text-transparent transition duration-100 ease-in-out hover:text-red-500 hover:opacity-100 hover:bg-red-100">Delete ?</span>
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="flex justify-end">
          <button className={`text-white bg-blue-500 rounded-full px-4 py-1 ${isSaveDisabled ? 'opacity-50 cursor-not-allowed' : ''}`} onClick={openModal} disabled={isSaveDisabled}>
            <p>Save a scenario</p>
          </button>
        </div>
      </div>
      {isModalOpen && <SaveScenarioModal setIsModalOpen={setIsModalOpen} />}
      {isDatabaseModalOpen && <DatabaseModal isDatabaseModalOpen={isDatabaseModalOpen} setIsDatabaseModalOpen={setIsDatabaseModalOpen}/>}
    </>
  );
}

export default ScenarioConstructor;
