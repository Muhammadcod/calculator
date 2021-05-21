import React from 'react';

const Display = (props) => {
    return (
        <div className='display border container'>
            <div className='border'>{props.view}</div>
            <div className='border'>{props.result}</div>
        </div>
    );
};

export default Display;
