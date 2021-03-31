export const todoReducer = (state=[], action) => {

    switch (action?.type) {
        case 'add':
            return [...state, action.payload]
        case 'delete':
            // se puede usar filter poruqe retorna un nuevo arreglo, no muta el existente
            return state.filter(s => s.id !== action.payload)
        case 'toggle':
            return state.map(s => 
                (s.id === action.payload) ? {...s, done: !s.done} : s
            )
        default:  // si no recibe accion o no esta definida, cae en el default
            return state;
    }
}