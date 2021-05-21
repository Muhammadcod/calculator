import React from 'react';

const Keypad = ({children}) => {
    return (
        <div className='container-fluid keypad' >
            <div className=' row g-2' style={{ height: `100%`}}>
                {children}
            </div>
        </div>

    );
};

export default Keypad;
