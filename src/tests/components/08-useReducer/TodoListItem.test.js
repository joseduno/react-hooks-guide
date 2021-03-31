import { demoTodos } from "../../fixtures/demoTodos"
import TodoListItem from '../../../components/08-useReducer/TodoListItem'
import { shallow } from "enzyme";


describe('Pruebas en TodoListItem', () => {

    const todo = demoTodos[0]
    const index = 0
    const handleDone = jest.fn()
    const handleDelete = jest.fn()

    const wrapper = shallow(<TodoListItem 
        todo={todo}
        i={index}
        handleDone={handleDone}
        handleDelete={handleDelete}
    />)

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('debe llamar la funcion borrar', () => {
        wrapper.find('button').simulate('click')
        expect(handleDelete).toHaveBeenCalledWith(todo.id)
    })

    test('debe llamar la funcion toggle', () => {
        wrapper.find('span').simulate('click')
        expect(handleDone).toHaveBeenCalledWith(todo.id)
    })
    
    test('debe mostrar el texto correctamente ', () => {
        const span = wrapper.find('span')
        expect(span.text().trim()).toBe(`${0+1}. ${todo.desc}`)
    })
    
    test('debe mostrar la clase text-decoration-line-through en la etiqueta <span></span>', () => {
        let todo = demoTodos[0]
        todo.done = true
        const index = 0
        const handleDone = jest.fn()
        const handleDelete = jest.fn()
        const wrapper = shallow(<TodoListItem 
            todo={todo}
            i={index}
            handleDone={handleDone}
            handleDelete={handleDelete}
        />)
        expect(wrapper.find('span').hasClass('text-decoration-line-through')).toBe(true)
    })
    
})
