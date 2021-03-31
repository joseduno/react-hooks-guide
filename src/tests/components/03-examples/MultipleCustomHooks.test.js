import { shallow } from "enzyme";
import MultipleCustomHooks from "../../../components/03-examples/MultipleCustomHooks";
import useFetch from "../../../hooks/useFetch";
import useCounter from "../../../hooks/useCounter";
jest.mock('../../../hooks/useFetch')
jest.mock('../../../hooks/useCounter')


/*
jest.mock('../../hooks/useFetch') junto con useFetch.mockReturnValue({data: null, loading: true, error: null})
se utiliza para falsear la implementacion del hook, la intencion es probar el componente 
de forma aislada a los hooks que utiliza. Deben haber pruebas especificas para los hooks
tambien aislada de los componentes que lo usan
*/


describe('Pruebas en <MultipleCustomHooks />', () => {

    
    test('debe mostrarse correctamente sin data', () => {
        useCounter.mockReturnValue({
            state: 1,
            increment: jest.fn()
        })
        useFetch.mockReturnValue({
            data: null,
            loading: true,
            error: null
        })
        const wrapper = shallow(<MultipleCustomHooks />)
        expect(wrapper).toMatchSnapshot()
    })

    test('debe mostrarse correctamente con data', () => {
        useCounter.mockReturnValue({
            state: 1,
            increment: jest.fn()
        })
        useFetch.mockReturnValue({
            data: [{author: 'jose', quote: 'hola'}],
            loading: false,
            error: null
        })
        const wrapper = shallow(<MultipleCustomHooks />)
        expect(wrapper.find('.alert').exists()).toBe(false)
        expect(wrapper.find('p').at(1).text().trim()).toBe('hola')
        expect(wrapper.find('footer').text().trim()).toBe('jose')
        
    })
    
})
