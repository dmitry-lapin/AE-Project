import React, { useState } from "react";
import FilterComponent from "./FilterComponent";

const FiltersField = () => {
    const [filters, setFilters] = useState([]);

    const handleAddFilter = (filter) => {
        //callback action to add new filters in filters state. 
        setFilters([...filters, filter]);
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