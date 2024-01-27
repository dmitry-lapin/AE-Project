import React from "react";
import { useSelector } from "react-redux";
import ComponentWrapper from "../helpers/ComponentWrapper";
import FilterBlock from "../helpers/FilterBlock"; 

const CreatedFiltersComponent = () => {
  const filters = useSelector((state) => state.filters);

  return (
    <ComponentWrapper header="Ready-to-use filters">
        <div className="grid grid-cols-3 gap-4 p-3 bg-zinc-200 border border-zinc-300 rounded shadow-sm">
            {filters.map((filter, index) => (
              <FilterBlock key={index} filter={filter} />
            ))}
      </div>
    </ComponentWrapper>
  );
};

export default CreatedFiltersComponent;
