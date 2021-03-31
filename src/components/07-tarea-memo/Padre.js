import React, { useCallback } from 'react'
import { Hijo } from './Hijo'
import { useState } from 'react';

export const Padre = () => {

    const numeros = [2,4,6,8,10];
    const [valor, setValor] = useState(0);

    const incrementar = useCallback((num) => {
        setValor(c => c + num)
    }, [setValor])


    return (
        <div className='container mt-5'>
            <h1>Padre</h1>
            <p>
                Otro ejemplo de uso del 'useCallback' y 'React.memo'.
                El 'useCallback' se utiliza para memorizar la funcion y el 
                'React.memo' se utiliza para memorizar el componente que recibe
                la funcion memorizada como argumento
            </p>
            <p> Total: { valor } </p>

            {
                numeros.map( n => (
                    <Hijo 
                    key={ n }
                    numero={ n }
                    incrementar={ incrementar }
                    />
                ))
            }
                <hr />
        </div>
    )
}
