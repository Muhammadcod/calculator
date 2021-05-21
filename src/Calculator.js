import React from 'react';
import Display from "./Display";
import Keypad from "./Keypad";
import Header from "./Header";

const Calculator = () => {
    return (
        <div  className='calculator'>
            <Header />
            <Display />
            <Keypad />
        </div>
    );
};

export default Calculator;
