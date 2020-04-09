import React from 'react';


const StarsDisplay = (props) =>
    (
        <>
            {props.utils.range(1, props.count).map(starId =>
                <div key={starId} className="star"></div>
            )}
        </>
    )

export default StarsDisplay;