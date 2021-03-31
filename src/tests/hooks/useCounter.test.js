import { act, renderHook } from "@testing-library/react-hooks";
import useCounter from "../../hooks/useCounter";

describe('pruebas en useCounter', () => {
    test('debe retornar valores por defecto', () => {
        const {result} = renderHook(()=>useCounter());
        const {state:counter, increment, decrement, reset} = result.current
        expect(counter).toBe(10)
        expect(typeof increment).toBe('function')
        expect(typeof decrement).toBe('function')
        expect(typeof reset).toBe('function')
    })

    test('debe retornar counter igual a 100', () => {
        const {result} = renderHook(()=>useCounter(100));
        const {state:counter} = result.current
        expect(counter).toBe(100)
    })

    test('debe incrementar el counter en 1', () => {
        const {result} = renderHook(()=>useCounter(100));
        const {increment} = result.current
        // CUIDADO de donde se importa la funcion 'act',
        // debe ser importado de @testing-library/react-hooks y no de @testing-library/react
        act(()=>{increment()})
        // Desestructurar despues de modificar el estado, si no, no funciona
        const {state:counter} = result.current
        expect(counter).toBe(101)
    })

    test('debe disminuir el counter en 1', () => {
        const {result} = renderHook(()=>useCounter(100));
        const {decrement} = result.current
        act(()=>{decrement()})
        // Desestructurar despues de modificar el estado, si no, no funciona
        const {state:counter} = result.current
        expect(counter).toBe(99)
    })

    test('debe tener el contador su valor por defecto despues de incrementar y/o disminuir su valor', () => {
        const {result} = renderHook(()=>useCounter(100));
        const {reset, increment, decrement} = result.current
        act(()=>{
            increment(10);
            decrement(3);
            reset();
        })
        // Desestructurar despues de modificar el estado, si no, no funciona
        const {state:counter} = result.current
        expect(counter).toBe(100)
    })


})
