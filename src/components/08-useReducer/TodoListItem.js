import React from 'react'

const TodoListItem = ({todo, i, handleDone, handleDelete}) => {
    return (
        <li 
            className='list-group-item d-flex justify-content-between align-items-center'
        >
            <span
                type='button'
                className={todo.done ? 'text-decoration-line-through' : ''}
                onClick={() => handleDone(todo.id)}
            >
                {i+1}. {todo.desc}
            </span>
            <button 
                type='button'
                className='btn btn-danger btn-sm'
                onClick={()=>handleDelete(todo.id)}
            >
                Borrar
            </button>
        </li>
    )
}

export default TodoListItem
