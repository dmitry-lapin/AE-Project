import React from "react";
import { useSelector } from "react-redux";
import DraggableFilterBlock from "../helpers/Drag'n'drop/DraggableFilterBlock";

const FiltersField = () => {
  const filters = useSelector((state) => state.filters);

  return (
    <div className="mx-3 grid grid-cols-3 gap-4 p-3 bg-zinc-200 border border-zinc-300 rounded-lg shadow-sm">
      {filters.map((filter, index) => (
        <DraggableFilterBlock key={index} filter={filter} />
      ))}
    </div>
  );
};

export default FiltersField;
