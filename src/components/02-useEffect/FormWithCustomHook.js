import React from 'react'
import useForm from '../../hooks/useForm'

const FormWithCustomHook = () => {

    
    const [formValues, handleChange] = useForm({name: '', email: '', password: ''});
    const {name, email, password} = formValues;
    const handleSubmit = e => {
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <div className='container mt-5'>
            <h1>FormWithCustomHook</h1>
            <p>
                Utilizar custom hook para trabajar con formularios, mucho mas facil hacerlo
                de esta forma, facil de reutilizar
            </p>
            <form className='form-group'>

                <input type='text' 
                    name='name' 
                    className='form-control mt-2' 
                    placeholder='Tu nombre'
                    autoComplete='off'
                    value={name}
                    onChange={handleChange}
                />
                
                <input type='email' 
                    name='email' 
                    className='form-control mt-2' 
                    placeholder='Tu e-mail'
                    autoComplete='off'
                    value={email}
                    onChange={handleChange}
                />

                <input type='password' 
                    name='password' 
                    className='form-control mt-2' 
                    placeholder='Tu password'
                    autoComplete='off'
                    value={password}
                    onChange={handleChange}
                />

                <button className='btn btn-primary mt-2' onClick={handleSubmit}>Guardar</button>
            
            </form>
            <hr />
        </div>
    )
}

export default FormWithCustomHook
