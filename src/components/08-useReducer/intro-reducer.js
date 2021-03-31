const initialState = [{
    id: 1,
    todo: 'Comprar pan',
    done: false
}]

const todoReducer = (state=initialState, action) => {
    if (action?.type === 'add') {
        return [...state, action.payload]
    }
    return state
}

const newTodo = {
    id: 2,
    todo: 'Comprar leche',
    done: false
}

const action = {
    type: 'add',
    payload: newTodo
}

let todos = todoReducer()
todos = todoReducer(todos, action)

console.log(todos)