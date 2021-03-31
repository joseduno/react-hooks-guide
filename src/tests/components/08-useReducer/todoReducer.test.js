import { todoReducer } from "../../../components/08-useReducer/todoReducer"
import { demoTodos } from "../../fixtures/demoTodos"

describe('Pruebas en todoReducer', () => {

    test('debe retornar el estado por defecto', () => {
        const todos = todoReducer(demoTodos)
        expect(todos).toEqual(demoTodos)
    })

    test('debe agregar un TODO', () => {
        const newTodo = {
            id: 3,
            desc: 'Aprender Node.js',
            done: false
        }
        const todos = todoReducer(demoTodos, {
            type: 'add',
            payload: newTodo
        })
        expect(todos.length).toBe(3)
        expect(todos).toEqual([...demoTodos, newTodo])
    })

    test('debe borrar un TODO', () => {
        const todos = todoReducer(demoTodos, {
            type: 'delete',
            payload: 2
        })
        expect(todos.length).toBe(1)
        expect(todos).toEqual([demoTodos[0]])
    })

    test('debe cambiar el done de algun TODO', () => {
        const id = 1
        const todos = todoReducer(demoTodos, {
            type: 'toggle',
            payload: id
        })
        expect(todos.find(todo => todo.id === id).done).toBe(true)
        expect(todos[1]).toEqual(demoTodos[1])
    })

})
