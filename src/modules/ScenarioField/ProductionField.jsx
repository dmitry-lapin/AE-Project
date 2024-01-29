import React from "react";
import FiltersField from "./components/FiltersField";

import ScenarioConstructor from "./components/ScenarioConstructor";

import CreatedFiltersComponent from "./components/CreatedFiltersComponent";
import JsonViewer from "./components/ObjectField";

import LogComponent from "./components/LogComponent";

import ComponentWrapper from "./helpers/ComponentWrapper";

const ProductionField = () => {


    return (
      <div className="space-y-5">
        <div className="bg-zinc-200 border-b border-zinc-300 p-5 font-semibold text-lg ">
            <p className="text-black">SCENARIO CONSTRUCTOR</p>
        </div>
        <div className="flex justify-between px-3">
          <ScenarioConstructor/>
          <div className="w-1/12 flex items-center justify-center min-h-64">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="text-gray-700 w-20 h-20">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
          </div>
          <JsonViewer />
        </div>
        <FiltersField />
        <ComponentWrapper header={"Ready-to-use filters"}>
          <CreatedFiltersComponent />
        </ComponentWrapper>
        <LogComponent />
      </div>
    );
  };

export default ProductionField;