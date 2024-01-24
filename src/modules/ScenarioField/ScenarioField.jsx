import React, { useState } from "react";
import FiltersField from "./components/FiltersField";

const ScenarioField = () => {
    return (
      <div className="space-y-3">
        <div className="bg-zinc-200 border-b border-zinc-300 p-5 font-semibold text-lg ">
            <p className="text-black">Edit your scenario</p>
        </div>
        <FiltersField />
      </div>
    );
  };

export default ScenarioField;
