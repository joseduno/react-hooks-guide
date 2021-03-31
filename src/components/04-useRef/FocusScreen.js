import React, { useRef } from 'react'

const FocusScreen = () => {

    const inputRef = useRef()

    // RECUERDA, para acceder a las propiedades de las etiquetas html, utilizar la
    // propiedad .current de la referencia definida con el useRef
    const handleClick = () => {
        inputRef.current.select()
    }

    return (
        <div className='container mt-5'>
            <h1>FocusScreen</h1>
            <p>
                Muestra el uso del useRef (ejemplo no real pero didactico), para mantener
                referencia a componentes del html, incluídos componentes react
            </p>
            <input className='form-control' placeholder='Su nombre' ref={inputRef}/>
            <button className='btn btn-outline-primary mt-3' onClick={handleClick}>Focus</button>
            <hr />
        </div>
    )
}

export default FocusScreen
