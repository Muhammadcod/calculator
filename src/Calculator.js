import React from 'react';
import { evaluate } from 'mathjs'
import Display from "./Display";
import Keypad from "./Keypad";
import Header from "./Header";
import Button from "./Button";

let symbol =  [
    {d:"C",
        type:'operator', label: 'clear'},
     {
        d:"0",
        type:'digit', label: 'digit-0'
        },
    {d:"*",
        type:'operator', label: 'op-mul'},
    {d:"/",
        type:'operator', label: 'op-div'},
    {
        d:"1",
        type:'digit', label: 'digit-1'
        },
     {d:"2",
    type:'digit', label: 'digit-2'},
     {d:"3",
    type:'digit', label: 'digit-3'},

    {d:"+",
        type:'operator', label: 'op-add'},
     {d:"4",
    type:'digit', label: 'digit-4'},
     {d:"5",
    type:'digit', label: 'digit-5'},
     {d:"6",
    type:'digit', label: 'digit-6'},
    {d:"-",
        type:'operator', label: 'op-sub'},
     {d:"7",
    type:'digit', label: 'digit-7'},
     {d:"8",
    type:'digit', label: 'digit-8'},
     {d:"9",
    type:'digit', label: 'digit-9'},

     {d:"=",
    type:'equals',
         label: 'eq'},




];
let digits = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const Calculator = () => {
    const [output, setOutput] = React.useState('')
    const [result, setResult] = React.useState('')

    const lastSymbol = output.length >= -1 ? output.charAt(output.length - 1) : null

    const handleClick = (val, type, last) => {
        if(val === 'C') {
            setOutput('')
            setResult('')
        } else if(val === '=') {
            if(digits.indexOf(parseInt(lastSymbol, 10)) !== -1 ) {
                setResult(evaluate(output))
            }
        } else if((last === '+' || last === '-') && (type === 'operator')) {
            setOutput(prevState => prevState.slice(0, -1) + val)

        } else if((last === '*' || last === '/') && (val !== '-') && (type === 'operator')) {
            setOutput(prevState => prevState.slice(0, -1) + val)

        } else if((last === '0') && (type === 'digit')) {
            setOutput(prevState => prevState.slice(0, -1) + val)

        } else {
            setOutput(prevState => prevState + val)
        }

    }

    return (
        <div  className='calculator'>
            <Header />
            <Display view={output} result={result} />
            <Keypad>
                {symbol.map((value, index) => (
                    <div className='col-3 button-wrapper'>
                        <Button
                            value={value.d}
                            key={index}
                            type={value.type}
                            label={value.label}
                            click={handleClick}
                            lastSymbol={lastSymbol}
                        />
                    </div>
                ))}
            </Keypad>
        </div>
    );
};

export default Calculator;
