import React from 'react';

const PlayNumber = (props) => (
    <button
        className="number"
        style={{ backgroundColor: props.colors[props.status] }}
        onClick={() => console.log('Num', props.number)}
    >
        {props.number}
    </button>
)

export default PlayNumber;