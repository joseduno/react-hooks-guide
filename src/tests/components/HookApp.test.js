import { shallow } from 'enzyme'
import HookApp from '../../HookApp'

describe('Pruebas sobre el componente Hook App', () => {
    test('debe renderizar correctamente el componentes', () => {
        const wrapper = shallow(<HookApp />)
        expect(wrapper).toMatchSnapshot()
    })
    
    
})
