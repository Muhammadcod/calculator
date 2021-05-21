import React from 'react';

const Display = (props) => {
    return (
        <div className='output container'>
            <h3 className='calc'>{props.view}</h3>
            <h1 className='result'>{props.result}</h1>
        </div>
    );
};

export default Display;
