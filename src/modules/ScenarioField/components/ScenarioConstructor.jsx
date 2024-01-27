import React from "react";
import DragndropImage from '../../../media/dragndrop.png';
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from 'react-redux';
import { addFilter, removeFilter } from '../slices/CurrentScenarioSlice';

const ScenarioConstructor = () => {
    const dispatch = useDispatch();

    const [, ref] = useDrop({
        accept: "BLOCK",
        drop: (item) => {
           item = item.filter;
          dispatch(addFilter(item));
        },
      });

    const filters = useSelector((state) => state.currentScenario);

    return (
        <div ref={ref} className="bg-zinc-200 border border-dashed border-zinc-400 mx-3 rounded-lg shadow-sm duration-150">
            <div className="flex flex-col items-center py-16 space-y-3">
                <img src={DragndropImage} alt="drag'n'drop"/>
                <p className="font-normal text-lg text-zinc-600">Drop your first <span className="font-bold">filter</span> here.</p>
                {/* Отображаем фильтры */}
                {filters.map((filter, index) => (
                    <div key={index} className="bg-zinc-200 border border-zinc-400 rounded p-2 m-2">
                        {`${filter.key} ${filter.comparison} ${filter.value}`}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ScenarioConstructor;
