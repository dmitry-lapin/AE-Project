
import React from "react";
import { useDrag } from "react-dnd";
import { useDispatch } from "react-redux";

import FilterBlock from "../FilterBlock";

const DraggableFilterBlock = ({ filter }) => {
  const dispatch = useDispatch();

  const [, ref] = useDrag({
    type: "FILTER",
    item: { filter },
    end: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      if (dropResult) {
      }
    },
  });

  return (
    <div ref={ref} style={{ cursor: "grab" }}>
      <FilterBlock filter={filter} />
    </div>
  );
};

export default DraggableFilterBlock;
