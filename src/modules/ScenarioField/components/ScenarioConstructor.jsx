import React, { useState } from "react";
import DragndropImage from '../../../media/dragndrop.png';
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from 'react-redux';
import { addFilter, removeFilter } from '../slices/CurrentScenarioSlice';

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

    const closeModal = () => {
        setIsModalOpen(false);
    }

    const saveScenario = () => {
        // Добавьте здесь логику для сохранения сценария
        // Закройте модальное окно после сохранения
        setIsModalOpen(false);
    }

    return (
        <>
        <div className="flex flex-col w-6/12 space-y-2">
            <div className="flex justify-between">
                <p className="font-semibold text-xl">Construct your scenario below</p>
                <button className="flex space-x-1 text-white bg-blue-500 rounded-full items-center justify-center px-4 py-1" onClick={openModal}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                        <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clipRule="evenodd" />
                    </svg>
                    <p className="text-lg">select a file</p>
                </button>
            </div>
            <div ref={ref} className={`flex-grow border border-dashed rounded-lg duration-100 ` + backgroundColor}>
                {filters.length === 0 ? (
                    <div className="flex flex-col items-center py-16 space-y-3">
                        <img src={DragndropImage} alt="drag'n'drop"/>
                        <p className="font-normal text-lg text-zinc-600">Drop your first <span className="font-bold">filter</span> here.</p>
                    </div>
                ) : (
                    <div className="grid grid-cols-4 grid-flow-row gap-3 p-4 font-normal">
                        {filters.map((filter, index) => (
                            <button key={index} className=" relative bg-white border border-gray-300 shadow-md rounded-full duration-100 py-2 overflow-hidden" onClick={() => handleRemoveClick(index)}>
                            {`${filter.key} ${filter.comparison} ${filter.value}`}
                            <span className=" absolute inset-0 flex items-center justify-center text-transparent transition duration-100 ease-in-out hover:text-red-500 hover:opacity-100 hover:bg-red-100">Delete ?</span>
                        </button>
                        ))}
                    </div>
                )}
            </div>
            <div className="flex justify-end">
                <button className="text-white bg-blue-500 rounded-full px-4 py-1" onClick={openModal}>
                    <p>Save a scenario</p>
                </button>
            </div>
        </div>
        {isModalOpen && (
            <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur bg-gray-600/50">
                <div className="bg-white w-1/4 p-4 rounded-lg shadow-lg">
                    <p className="text-xl font-semibold">Save Scenario</p>
                    <p className="text-sm text-zinc-600 mb-4">Select an save option.</p>
                    <div className="mx-4 space-y-1">
                        <div className="flex space-x-2 text-white">
                            <button className="py-2 rounded-xl w-1/2 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white duration-100">
                                <p>In Database</p>
                            </button>
                            <button className="py-2 rounded-xl w-1/2 border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white duration-100">
                                <p>In FIle</p>
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-end mt-4">
                        <button className="bg-blue-500 text-white rounded-full px-4 py-1 mr-2" onClick={saveScenario}>Save</button>
                        <button className="text-blue-500 rounded-full px-4 py-1" onClick={closeModal}>Cancel</button>
                    </div>
                </div>

            </div>
        )}
        </>
    );
}

export default ScenarioConstructor;