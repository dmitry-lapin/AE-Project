import React, { useRef } from "react";
import { useDrag } from "react-dnd";

const FilterBlock = ({ filter }) => {
    const [, ref] = useDrag({
        type: "BLOCK",
        item: { filter },
      });
  
    const textRef = useRef(null);


  return (
    <div ref={ref} style={{cursor: "grab"}} className="w-fit p-3 bg-gray-100 border border-zinc-200 rounded-full shadow-sm overflow-hidden hover:bg-gray-200 duration-100">
      <p className="text-black text-center" style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
        <span ref={textRef}>
          {filter.key} {filter.comparison} {filter.value}
        </span>
      </p>
    </div>
  );
};

export default FilterBlock;
