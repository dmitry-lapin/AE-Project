import React from "react";
import { useDrag } from "react-dnd";

import FilterBlock from "../FilterBlock";

const DraggableFilterBlock = ({ filter }) => {

  const [{ isDragging }, ref] = useDrag({
    type: "FILTER",
    item: { filter },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (item && dropResult) {
        console.log(dropResult);
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
      handlerId: monitor.getHandlerId(),
    }),
  });

  const opacity = isDragging ? 0.8 : 1;

  return (
    <div ref={ref} style={{ cursor: "grab", opacity }}>
      <FilterBlock filter={filter} />
    </div>
  );
};

export default DraggableFilterBlock;
