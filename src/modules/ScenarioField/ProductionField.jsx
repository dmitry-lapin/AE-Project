import React from "react";
import FiltersField from "./components/FiltersField";
import ScenarioConstructor from "./components/ScenarioConstructor";
import CreatedFiltersComponent from "./components/CreatedFiltersComponent";

const ProductionField = () => {
    return (
      <div className="space-y-5">
        <div className="bg-zinc-200 border-b border-zinc-300 p-5 font-semibold text-lg ">
            <p className="text-black">Edit your scenario</p>
        </div>
        <ScenarioConstructor />
        <FiltersField />
        <CreatedFiltersComponent />
      </div>
    );
  };

export default ProductionField;