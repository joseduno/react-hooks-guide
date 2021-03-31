import React from 'react';
import useCounter from '../../hooks/useCounter'


const CustomCounterHook = () => {

    const {state:counter, increment, decrement, reset} = useCounter(100)

    return (
        <div className='container mt-5'>
            <h1>CustomCounterHook</h1>
            <p>
                Contador implementando un custom hook, que retorna tanto estados como 
                funciones para manipular dicho estado
            </p>
            <h4>Counter {counter}</h4>
            <button className='btn btn-danger m-1' onClick={()=>{decrement(1)}}>-1</button>
            <button className='btn btn-secondary m-1' onClick={reset}>Reset</button>
            <button className='btn btn-success m-1' onClick={()=>{increment(1)}}>+1</button>
            <hr />
        </div>
    )
}

export default CustomCounterHook
