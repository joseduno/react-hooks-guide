import { useEffect, useRef, useState } from "react"


const useFetch = (url) => {

    // El valor de isMounted se almacena en isMounted.current
    const isMounted = useRef(true)
    const [state, setState] = useState({data: null, loading: true, error: null})

    useEffect(() => {
        return () => {
            isMounted.current = false
        }
    }, [])

    useEffect(() => {

        setState(s => ({...s, loading:true}))
        
        fetch(url)
            .then(resp => resp.json())
            .then(data =>{
                if (isMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    })
                } else {
                    console.log('setState no se llamo')
                }
            })
            .catch(e => {
                setState({data: null, loading: false, error: 'No se pudo cargar la info'})
            })
        
    }, [url])

    return state

}


export default useFetch