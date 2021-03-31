import { shallow } from "enzyme";
import TodoApp from "../../../components/08-useReducer/TodoApp";


describe('Pruebas en el compoente <TodoApp />', () => {

    const wrapper = shallow(<TodoApp />)

    // Para emular llamado a guardar en el local storage
    Storage.prototype.setItem = jest.fn(() => {})
    // el callback es para indicar el retorno ficticio de la jest function

    test('debe mostrarse correctamente', () => {
        expect(wrapper).toMatchSnapshot()
    })

    /* Comentado porque no funciona el mopunt en la version 17 de react
    test('debe agregar un TODO', () => {
        // Buscar diferencias entre mount (avanzado) y shallow (basico)

        const wrapper = mount(<TodoApp />)

        act(()=> {
            wrapper.find('AddTodo').prop('handleAdd')(demoTodos[0])
            wrapper.find('AddTodo').prop('handleAdd')(demoTodos[1])
        })


        expect(wrapper.find('h1').text().trim()).toBe('TodoApp (2)')

        // Referencia al localstorage para saber si fue llamado
        expect(localStorage.setItem).toHaveBeenCalledTimes(2)

    })

    // Lo mismo para eliminar un TODO
     */

    
})
