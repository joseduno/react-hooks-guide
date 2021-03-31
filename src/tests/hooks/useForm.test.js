import { act, renderHook } from "@testing-library/react-hooks";
import useForm from "../../hooks/useForm";


describe('Pruebas en useForm', () => {

    const initialForm = {
        name: 'unknown',
        email: 'unknown@test.com'
    }

    test('debe regresar un formulario por defecto', () => {
        const {result} = renderHook(()=>useForm(initialForm))
        const [formValues, handleChange, reset] = result.current
        expect(formValues).toEqual(initialForm)
        expect(typeof handleChange).toBe('function')
        expect(typeof reset).toBe('function')
    })

    test('debe cambiar el valor del formulario (name)', () =>{
        const {result} = renderHook(()=>useForm(initialForm))
        const [, handleChange] = result.current
        act(()=>{
            handleChange({
                target: {
                    name: 'name',
                    value: 'jose'
                }
            })
        })
        const [formValues] = result.current

        expect(formValues).toEqual({...initialForm, name: 'jose'})
    })

    test('debe reiniciar el formulario', () =>{
        const {result} = renderHook(()=>useForm(initialForm))
        const [, handleChange, reset] = result.current
        act(()=>{
            handleChange({
                target: {
                    name: 'name',
                    value: 'jose'
                }
            })
            reset()
        })
        const [formValues] = result.current

        expect(formValues).toEqual(initialForm)
    })
    
    
})
