import React from "react";
import { useSelector } from "react-redux";
import DraggableFilterBlock from "../helpers/Drag'n'drop/DraggableFilterBlock";

const FiltersField = () => {
  const filters = useSelector((state) => state.filters);

  return (
    <div className="mx-3 grid grid-cols-5 gap-3 p-3 bg-gray-200 border-gray-300 border rounded-lg shadow-sm">
      {filters.map((filter, index) => (
        <DraggableFilterBlock key={index} filter={filter} />
      ))}
    </div>
  );
};

export default FiltersField;
