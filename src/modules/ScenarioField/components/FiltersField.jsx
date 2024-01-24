import React from "react";
import FilterComponent from "./FilterComponent";

const FiltersField = () => {

    return(
        <>
            <div className="p-3 mx-3 flex-1 bg-zinc-200 border border-zinc-300 rounded">
                <FilterComponent />
            </div>
        </>
    );
}

export default FiltersField;