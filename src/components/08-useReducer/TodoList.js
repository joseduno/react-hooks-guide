import React from 'react'
import TodoListItem from './TodoListItem'

const TodoList = ({todos, handleDone, handleDelete}) => {

    return (
        <ul className='list-group list-group-flush'>
            {todos.map((todo, i) => (
                <TodoListItem
                    key={todo.id}
                    todo={todo}
                    i={i}
                    handleDone={handleDone}
                    handleDelete={handleDelete}
                />
            ))}
        </ul>
    )
}

export default TodoList
