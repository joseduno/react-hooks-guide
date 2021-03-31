import React from 'react'
import useForm from '../../hooks/useForm';


const AddTodo = ({handleAdd}) => {

    const [{todo}, handleChange, reset] = useForm({todo: ''});

    const handleSubmit = e => {
        e.preventDefault()
        if (todo.trim().length <= 2) {
            return;
        }
        const newTodo = {
            id: new Date().getTime(),
            desc: todo,
            done: false
        }
        handleAdd(newTodo)
        reset()
    }

    return (
        <>
            <h4>Agregar TODO</h4>
            <hr />
            <form onSubmit={handleSubmit}>
                <input 
                    type='text'
                    name='todo'
                    className='form-control form-control-sm'
                    placeholder='Nueva tarea...'
                    autoComplete='off'
                    onChange={handleChange}
                    value={todo}
                />
                <button type='submit' className='btn btn-outline-primary mt-2 btn-sm w-100'>Agregar</button>
            </form>
        </>
    )
}

export default AddTodo
