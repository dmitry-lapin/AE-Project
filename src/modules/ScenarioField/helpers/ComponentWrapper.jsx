import React from "react";

const ComponentWrapper = ({children, header}) => {
    return(
        <div className="mx-3 space-y-2">
            <div>
                    <p className="font-semibold text-xl">{header}</p>
            </div>
            {children}
        </div>
    );
}

export default ComponentWrapper;