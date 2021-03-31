import React from 'react'
import useCounter from '../../hooks/useCounter'
import useFetch from '../../hooks/useFetch'

const MultipleCustomHooks = () => {

    const {state, increment} = useCounter(1)

    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`)

    // data incialmente es null, !null returna true !!null retorna false
    // && if corto sin sentencia else
    const {author, quote} = !!data && data[0]

    return (
        <div className='container mt-5'>
            <h1>MultipleCustomHooks</h1>
            <h2>Breaking Bad Quotes</h2>
            <p>
                Utilizando e interactuando 2 custom hooks, useCounter y <b>useFetch</b>. 
                Éste ultimo hook muestra el uso del useEffect, peticiones a una API de
                de forma asincrona y otro ejemplo de uso del return en un useEffect
            </p>

            {loading ? (
                <div className='alert alert-info text-center'>Loading...</div>
                ) : (
                <blockquote className='blockquote'>
                    <p>{quote}</p>
                    <footer className='blockquote-footer'>{author}</footer>
                </blockquote>
            )}

            <button className='btn btn-primary' onClick={()=>increment(1)}>
                Next quote
            </button>
            
            <hr />
        </div>
    )
}

export default MultipleCustomHooks
