import React, { useCallback, useEffect, useState } from 'react'
import ShowIncrement from './ShowIncrement'

const CallbackHook = () => {

    const [counter, setCounter] = useState(10)

    // const increment = () => setCounter(counter + 1)

    // Similar a useMemo pero memoriza funciones en lugar de argumentos o valores
    const increment = useCallback((num) => {
        setCounter(c => c + num)  // Para evitar errores con dependencias, usar c => c + 1
    }, [setCounter])
    // Con esto se memoriza la funcion, aun así hay que memorizar el componente hijo
    // para que no se renderice el boton incrementar cada vez que se presiona click

    // useCallback tambien util para memorizar funciones que son argumentos de algun efecto
    // Si no se utiliza el useCallback, el efecto se ejecutaria en cada renderizacion
    useEffect(() => {
        console.log('???')
    }, [increment])

    return (
        <div className='container mt-5'>
            <h1>useCallback Hook: {counter}</h1>
            <p>
                Muestra el uso del useCallBack, utilizado para indicarle a react que 
                memorice funciones que son pasadas como argumentos a otros componentes, 
                si no se implementa, la función se crearía en cada renderizado ocupando 
                sitios diferentes en memoria (a pesar que la funcion haga lo mismo, 
                realmente no sería la misma el useCallback, se utliza para que react 
                reconozca la igualdad de la función aunque sea creada multiple veces).
            </p>
            <ShowIncrement increment={increment} />
            <hr />
        </div>
    )
}

export default CallbackHook
