import React from "react";

const FilterBlock = ({ filter }) => {
  return (
    <div className="p-3 bg-zinc-200 border border-zinc-300 rounded shadow-sm">
      <p className="text-black text-center">
        {filter.key} {filter.comparison} {filter.value}
      </p>
    </div>
  );
};

export default FilterBlock;
