import React, { useState } from 'react'
import useCounter from '../../hooks/useCounter'
import Small from './Small'

const Memorize = () => {

    const [show, setShow] = useState(true)
    const {state:counter, increment} = useCounter(10)

    return (
        <div className='container mt-5'>
            <h1> Memorize (Counter: <Small value={counter} />)</h1>
            <p>
                Se muestra el uso de la funcion 'memo' de react, util para evitar que 
                un componente hijo sea renderizado, a pesar de que su componente
                padre necesite renderizarse por algún cambio en su contenido que no 
                tenga relación con su hijo. <br />
                <em>
                    El componente 'Small' no se renderiza cuando se presiona el
                    boton 'show/hide' porque no altera el valor del contador,
                    solo lo hace cuando se renderiza el componente padre por primera vez 
                    o cuando el valor del contador efectivamente se incrementa
                </em>
            </p>
            <button className='btn btn-primary m-1' onClick={()=>increment()}>+1</button>
            <button className='btn btn-success m-1' onClick={()=>setShow(!show)}>
                Show/Hide {JSON.stringify(show)}
            </button>
            <hr />
        </div>
    )
}

export default Memorize
