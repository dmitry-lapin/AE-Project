import React, { useRef } from "react";
import { useDrag } from "react-dnd";

const FilterBlock = ({ filter }) => {
    const [, ref] = useDrag({
        type: "BLOCK",
        item: { filter },
      });
  
    const textRef = useRef(null);


  return (
    <div ref={ref} style={{cursor: "grab"}} className="p-3 bg-zinc-200 border border-zinc-300 rounded shadow-sm overflow-hidden">
      <p className="text-black text-center" style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
        <span ref={textRef}>
          {filter.key} {filter.comparison} {filter.value}
        </span>
      </p>
    </div>
  );
};

export default FilterBlock;
