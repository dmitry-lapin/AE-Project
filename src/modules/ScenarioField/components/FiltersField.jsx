import React from "react";

import { useDispatch } from "react-redux";
import { addFilter } from "../slices/filtersSlice";

import FilterComponent from "./FilterComponent";

const FiltersField = () => {
    const dispatch = useDispatch();

    const handleAddFilter = (filter) => {
        dispatch(addFilter(filter)); 
    };

    return(
        <>
            <div className="p-3 mx-3 flex-1 bg-zinc-200 border border-zinc-300 rounded">
                <FilterComponent onAddFilter={handleAddFilter}/>
            </div>
        </>
    );
}

export default FiltersField;