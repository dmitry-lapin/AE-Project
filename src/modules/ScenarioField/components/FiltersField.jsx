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
            <div className="flex-1">
                <FilterComponent onAddFilter={handleAddFilter}/>
            </div>
        </ComponentWrapper>
        
    );
}

export default FiltersField;