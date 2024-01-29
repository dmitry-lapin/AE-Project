import React from "react";
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

    return (
        <div className="flex flex-col w-6/12 space-y-2">
            <div>
                    <p className="font-semibold text-xl">Construct your scenario below</p>
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
        </div>
    );
}

export default ScenarioConstructor;
