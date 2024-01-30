import React from "react";
import { useSelector } from "react-redux";
import DraggableFilterBlock from "../helpers/Drag'n'drop/DraggableFilterBlock";

const FiltersField = () => {
  const filters = useSelector((state) => state.filters);

  return (
    <div className="flex flex-wrap p-3 bg-gray-200 border-gray-300 border rounded-lg shadow-sm">
      {filters.length === 0 ? (
        <div className="flex flex-col items-center w-full font-semibold py-10">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-14 h-14 text-blue-500">
           <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-2.625 6c-.54 0-.828.419-.936.634a1.96 1.96 0 0 0-.189.866c0 .298.059.605.189.866.108.215.395.634.936.634.54 0 .828-.419.936-.634.13-.26.189-.568.189-.866 0-.298-.059-.605-.189-.866-.108-.215-.395-.634-.936-.634Zm4.314.634c.108-.215.395-.634.936-.634.54 0 .828.419.936.634.13.26.189.568.189.866 0 .298-.059.605-.189.866-.108.215-.395.634-.936.634-.54 0-.828-.419-.936-.634a1.96 1.96 0 0 1-.189-.866c0-.298.059-.605.189-.866Zm2.023 6.828a.75.75 0 1 0-1.06-1.06 3.75 3.75 0 0 1-5.304 0 .75.75 0 0 0-1.06 1.06 5.25 5.25 0 0 0 7.424 0Z" clipRule="evenodd" />
          </svg>
          <p className="mt-1 text-xl">There is nothing...</p>
          <p className="text-gray-500 text-sm">Make a new filter higher.</p>
        </div>
      ) : (
        filters.map((filter, index) => (
          <DraggableFilterBlock key={index} filter={filter} />
        ))
      )}
    </div>
  );
};

export default FiltersField;
