import React, { useEffect, useReducer } from 'react'
import AddTodo from './AddTodo'
import TodoList from './TodoList'
import { todoReducer } from './todoReducer'

// Con el local storage, puedo mantener valores aunque la pagina se actualice completamente
const init = () => JSON.parse(localStorage.getItem('todos')) || []
// se obtiene el mismo resultado si en lugar de dfinirlo como una funcion,
// se define como un objeto y se pasa como segundo argumento al useReducer

const TodoApp = () => {

    // init funcion que se ejecuta por primera vez, [] valor inicial del stado del reducer
    // todoReducer es la funcion reducer, todos el estado del reducer, dispatch es la funcion
    // que permite ejecutar los diferentes acciones definidas en el reducer (todoReducer)
    const [todos, dispatch] = useReducer(todoReducer, [], init)
    
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    const handleDelete = id => {
        const action = {
            type: 'delete',
            payload: id
        }
        dispatch(action)
    }

    const handleDone = id => {
        dispatch({
            type: 'toggle',
            payload: id
        })
    }

    const handleAdd = (newTodo) => {
        dispatch({
            type: 'add',
            payload: newTodo
        })
    }

    return (
        <div className='container mt-5'>
            <h1>TodoApp ({todos.length})</h1>
            <p>
                Pequeña app, muestra claramente que son y como funcionan las funciones 
                'reducers' (estados y acciones para manipularlos) y el uso del hook
                'useReducer' que constituyen las bases para entender Redux).
                Básicamente el useReducer se asemeja al useState, pero es más robusto, 
                ya que permite modificar el estado de muchas formas, más fácil de lo 
                se lograría utilizando netamente useState. Recomendación: utilizar useState 
                para cosas más simples, y useReducer para cosas más complejas
                <br /><br />
                También se muestra como utilizar el local storage del navegador en conjunto 
                con el useEffect
            </p>
            <div className='row'>
                <div className='col-7'>
                    <TodoList
                        todos={todos}
                        handleDelete={handleDelete}
                        handleDone={handleDone}
                    />
                </div>
                <div className='col mt-2'>
                    <AddTodo handleAdd = {handleAdd}/>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default TodoApp
