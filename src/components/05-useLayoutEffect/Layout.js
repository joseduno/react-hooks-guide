import React, { useLayoutEffect, useRef, useState } from 'react'
import useCounter from '../../hooks/useCounter'
import useFetch from '../../hooks/useFetch'
import './Layout.css'

const Layout = () => {

    const {state, increment} = useCounter(1)

    const {data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${state}`)

    const {quote} = !!data && data[0]

    const pTag = useRef()
    const [boxSize, setBoxSize] = useState({})

    // useLayoutEffect se ejecuta antes de que se renderice el componete
    // a diferencia del useEffect, que lo hace despues del renderizado
    // se usa muy poco
    useLayoutEffect(() => {
        setBoxSize(pTag.current.getBoundingClientRect())
    }, [quote])

    return (
        <div className='container mt-5'>
            <h1>Breaking Bad Quotes (useLayoutEffect)</h1>
            <p>
                Ejemplo de uso del useLayoutEffect, a diferencia del useEffect, se ejecuta
                antes de renderizar el componente. También se muestra un ejemplo de uso del
                useRef, en conjunto con el useLayoutEffect
            </p>

            <blockquote className='blockquote'>
                <p ref={pTag}>{quote}</p>
            </blockquote>
            <pre>
                {JSON.stringify(boxSize, null, 3)}
            </pre>

            <button className='btn btn-primary' onClick={()=>increment(1)}>
                Next quote
            </button>
            
            <hr />
        </div>
    )
}

export default Layout
