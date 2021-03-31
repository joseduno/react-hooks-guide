import React, { useState } from 'react';


const CounterApp = () => {

    const [state, setState] = useState({
        counter1: 10, 
        counter2: 20,
        counter3: 30,
        counter4: 40,
    })
    const {counter1, counter2} = state
    const handleClick1 = e => setState({...state, counter1: counter1 + 1})
    const handleClick2 = e => setState({...state, counter2: counter2 + 1})

    return (
        <div className='container mt-5'>
            <h1>CounterApp Sin Custom Hook</h1>
            <p>
                Contador utilizando solamente useState,
                tambien se muestra ejecutar accion luego de dar click a un boton
            </p>
            <h4>Counter1 {counter1}</h4>
            <h4>Counter2 {counter2}</h4>
            <button className='btn btn-primary m-1' onClick={handleClick1} >Counter1 +1</button>
            <button className='btn btn-success m-1' onClick={handleClick2} >Counter2 +1</button>
            <hr />
        </div>
    )
};

export default CounterApp;
