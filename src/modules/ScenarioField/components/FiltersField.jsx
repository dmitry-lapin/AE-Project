import React from "react";

import { useDispatch } from "react-redux";
import { addFilter } from "../slices/filtersSlice";

import FilterComponent from "./FilterComponent";
import ComponentWrapper from "../helpers/ComponentWrapper";

const FiltersField = () => {
    const dispatch = useDispatch();

    const handleAddFilter = (filter) => {
        dispatch(addFilter(filter)); 
    };

    return(
        <ComponentWrapper header="Create your filter">
            <div className="p-3 flex-1 bg-zinc-200 border border-zinc-300 rounded shadow-sm">
                <FilterComponent onAddFilter={handleAddFilter}/>
            </div>
        </ComponentWrapper>
        
    );
}

export default FiltersField;