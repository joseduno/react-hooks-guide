import useFetch from "../../hooks/useFetch"
import { renderHook } from "@testing-library/react-hooks";

describe('Pruebas en useFetch', () => {
    test('Debe retornar valores por defecto', () => {
        const { result } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'))
        const {data, loading, error} = result.current
        expect(data).toBe(null)
        expect(loading).toBe(true)
        expect(error).toBe(null)
    })

    test('Debe retornar datos despues de obtener la respuesta', async() => {
        const { result, waitForNextUpdate } = renderHook(() => useFetch('https://www.breakingbadapi.com/api/quotes/1'));
        // waitForNextUpdate, util para funciones asincronas que actualizan el estado despues de resolverse
        await waitForNextUpdate({timeout: 5000})
        const {data, loading, error} = result.current
        expect(data.length).toBe(1)
        expect(loading).toBe(false)
        expect(error).toBe(null)
    })

    test('Debe manejar el error', async() => {
        const { result, waitForNextUpdate } = renderHook(() => useFetch('https://reqres.in/apiERROR/users?page=2'));
        // waitForNextUpdate, util para funciones asincronas que actualizan el estado despues de resolverse
        await waitForNextUpdate({timeout: 5000})
        const {data, loading, error} = result.current
        expect(data).toBe(null)
        expect(loading).toBe(false)
        expect(error).toBe('No se pudo cargar la info')
    })
})
