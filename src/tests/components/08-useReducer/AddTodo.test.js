import AddTodo from "../../../components/08-useReducer/AddTodo"
import { shallow } from "enzyme";

describe('Pruebas en componente <AddTodo />', () => {

    const handleAdd = jest.fn()
    const wrapper = shallow(<AddTodo handleAdd={handleAdd} />)

    test('Debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    test('no debe llamar handleAdd', () => {
        wrapper.find('form').simulate('submit', {preventDefault(){}})
        expect(handleAdd).not.toHaveBeenCalled()
    })

    test('debe llamar handleAdd', () => {
        const value = 'Aprender Express'

        wrapper.find('input').simulate('change', {target: {
            value,  // esto es el value del input
            name: 'todo'  // esto es el name del input
        }})
        wrapper.find('form').simulate('submit', {preventDefault(){}})
        expect(handleAdd).toHaveBeenCalled()
        expect(handleAdd).toHaveBeenCalledWith(expect.any(Object))
        expect(handleAdd).toHaveBeenCalledWith({
            id: expect.any(Number),  // cualquier numero
            desc: value,
            done: false
        })
        expect(wrapper.find('input').prop('value')).toBe('')
    })
    
    
})
