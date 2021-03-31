import { demoTodos } from "../../fixtures/demoTodos"
import { shallow } from "enzyme";
import TodoList from "../../../components/08-useReducer/TodoList";

describe('Pruebas en <TodoList />', () => {

    const handleDone = jest.fn()
    const handleDelete = jest.fn()

    const wrapper = shallow(<TodoList
        todos={demoTodos}
        handleDone = {handleDone}
        handleDelete = {handleDelete}
    />)

    test('debe mostrarse el componente correctamente con la cantidad correcta de TodoListItem', () => {
        expect(wrapper).toMatchSnapshot()
        expect(wrapper.find('TodoListItem').length).toBe(demoTodos.length)
    })

    test('debe tener las propiedades definidas de forma correcta', () => {
        expect(wrapper.find('TodoListItem').at(0).prop('handleDelete')).toEqual(expect.any(Function))
        expect(wrapper.find('TodoListItem').at(0).prop('handleDone')).toEqual(expect.any(Function))
    })
    
    
})
