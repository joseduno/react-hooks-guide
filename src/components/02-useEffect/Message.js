import React, { useEffect, useState } from 'react'

const Message = () => {

    const [coors, setCoors] = useState({x: 0, y: 0})
    const {x, y} = coors

    const mouseMove = (e) => setCoors({x: e.x, y: e.y})

    useEffect(() => {
        window.addEventListener('mousemove', mouseMove)
        return () => {
            // Muy importante!, el return del useEffect se usa para tareas de limpieza
            // Cuidado con los eventos del navegador, 
            // si no se remueven pueden crearse de forma descontrolada usando useEffect
            window.removeEventListener('mousemove', mouseMove)
        }
    })

    return (
        <div className='mt-3'>
            <p>Coors: x={x}, y={y}</p>
        </div>
    )
}

export default Message
