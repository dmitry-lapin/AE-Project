import React, { useRef, useEffect } from "react";

const FilterBlock = ({ filter }) => {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;
    const parentElement = textElement.parentElement;
    const textWidth = textElement.offsetWidth;
    const parentWidth = parentElement.offsetWidth;

    if (textWidth > parentWidth) {
      const animationDuration = (textWidth / 50) * 1000; 
      textElement.style.animation = `marquee ${animationDuration}ms linear infinite`;
    }
  }, []);

  return (
    <div className="p-3 bg-zinc-200 border border-zinc-300 rounded shadow-sm overflow-hidden">
      <p className="text-black text-center" style={{ whiteSpace: "nowrap", overflow: "hidden" }}>
        <span ref={textRef} className="animate-marquee">
          {filter.key} {filter.comparison} {filter.value}
        </span>
      </p>
    </div>
  );
};

export default FilterBlock;
