import React from 'react';


const Button = (props) => {


    const emptyCheck =    props.lastSymbol === '' ? props.type === 'operator' && props.value !== '-' : false

    const handleClick = () => {
        props.click(props.value,props.type, props.lastSymbol)
    }

    return (
        <button
            className={`p-3 border  button ${props.tag}`}
            data-value={props.value}
            onClick={handleClick}
            disabled= {emptyCheck}
        >
            {props.value}
        </button>
    );
};

export default Button;
