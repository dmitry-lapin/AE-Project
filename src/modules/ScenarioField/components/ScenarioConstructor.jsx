import React from "react";
import DragndropImage from '../../../media/dragndrop.png';

const ScenarioConstructor = () => {
    return(
        <div className="bg-zinc-200 border border-dashed border-zinc-400 mx-3 rounded-lg shadow-sm">
            <div className="flex flex-col items-center py-16 space-y-3">
                <img src={DragndropImage} alt="drag'n'drop"/>
                <p className="font-normal text-lg text-zinc-600">Drop your first <span className="font-bold">filter</span> here.</p>
            </div>
        </div>
    );
}

export default ScenarioConstructor;