import React, { useState } from "react";
import DragndropImage from '../../../media/dragndrop.png';
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from 'react-redux';
import { addFilter, removeFilter, clearFilters } from '../slices/CurrentScenarioSlice';
import SaveScenarioModal from "./ScenarioConstructor/particles/SaveScenarioModal";

const ScenarioConstructor = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.currentScenario.filters);

  const [{ canDrop, isOver }, ref] = useDrop({
    accept: "BLOCK",
    drop: (item) => {
      item = item.filter;
      dispatch(addFilter(item));
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
  
  

  return (
    <>
      <div className="flex flex-col w-6/12 space-y-2">
        <div className="flex justify-between">
          <p className="font-semibold text-xl">Construct your scenario below</p>
          <input
            type="file"
            accept=".json"
            onChange={handleFileChange}
              />
        </div>
        <div ref={ref} className={`flex-grow border border-dashed rounded-lg duration-100 ` + backgroundColor}>
          {filters.length === 0 ? (
            <div className="flex flex-col items-center py-16 space-y-3">
              <img src={DragndropImage} alt="drag'n'drop"/>
              <p className="font-normal text-lg text-zinc-600">Drop your first <span className="font-bold">filter</span> here.</p>
            </div>
          ) : (
            <div className="space-x-5 space-y-2 pt-2 pb-4 px-4 font-normal">
              {filters.map((filter, index) => (
                <button key={index} className="px-4 relative bg-white border border-gray-300 shadow-md rounded-full duration-100 py-2 overflow-hidden" onClick={() => handleRemoveClick(index)}>
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
    </>
  );
}

export default ScenarioConstructor;
