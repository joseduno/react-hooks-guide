import React, { useMemo, useState } from 'react'
import { procesoPesado } from '../../helpers/procesoPesado'
import useCounter from '../../hooks/useCounter'

const MemoHook = () => {

    const [show, setShow] = useState(true)
    const {state:counter, increment} = useCounter(1000)

    // parecido al useEffect pero con funciones, no con componentes de react
    // condiciona la ejecucion de una funcion al cambio de sus variables dependientes
    const memoProcesoPesado = useMemo(() => {procesoPesado(counter)}, [counter])


    return (
        <div className='container mt-5'>
            <h1>MemoHook (useMemo)</h1>
            <p>
                Muestra uso del hook useMemo, util para condicionar la ejecución 
                de funciones similar a como funciona el useEffect o useLayoutEffect, 
                pero no condiciona el renderizado de componentes sino la ejecución 
                de una funcion, que por ejemplo implique ser un proceso lento/pesado
            </p>
            <h3>Counter: <small>{counter}</small></h3>

            <p>{memoProcesoPesado}</p>

            <button className='btn btn-primary m-1' onClick={()=>increment()}>+1</button>
            <button className='btn btn-success m-1' onClick={()=>setShow(!show)}>
                Show/Hide {JSON.stringify(show)}
            </button>
            <hr />
        </div>
    )
}

export default MemoHook
