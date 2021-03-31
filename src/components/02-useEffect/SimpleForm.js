import React, { useEffect, useState } from 'react'
import Message from './Message'

const SimpleForm = () => {


    const [formState, setFormState] = useState({
        name: '',
        email: ''
    })
    const {name, email} = formState

    // Todos los efectos se cargan la primera vez, sin importar sus dependencias

    useEffect(() => {
        // console.log('PRIMERA carga!')
    }, [])

    useEffect(() => {
        // console.log('ALGO cambió en formState')
    }, [formState])

    useEffect(() => {
        // console.log('El NOMBRE en el formState cambió')
    }, [name])
    
    useEffect(() => {
        // console.log('El EMAIL en el formState cambió')
    }, [email])

    
    const handleChange = ({target}) => {setFormState({
        ...formState,
        [target.name]: target.value
    })}

    return (
        <div className='container mt-5'>
            <h1>SimpleForm</h1>
            <p>
                Formulario simple implementado con useState. Tambien se utiliza el
                useEffect con y sin dependencias, para mostrar como funciona. Tambien
                se muestra como mostrar un componente de forma condicional 
                (escribiendo 'coors' en el campo 'nombre').
                <br />
                En el componente Message, tambien se muestra como escuchar eventos
                del explorador, y la utilidad del return de un useEffect, el cual se
                ejecuta al desmontarse un componente en react
            </p>
            <div className='form-group'>
                <input type='text' 
                    name='name' 
                    className='form-control' 
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={name}
                    onChange={handleChange}
                />
                
                <input type='email' 
                    name='email' 
                    className='form-control' 
                    placeholder='Tu e-mail'
                    autoComplete='off'
                    value={email}
                    onChange={handleChange}
                />
            
            </div>

            {(name==='coors') && <Message />}

            <hr />
        </div>
    )
}

export default SimpleForm
