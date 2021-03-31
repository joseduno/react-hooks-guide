export const procesoPesado = (iteraciones) => {
    for (let i=0; i<iteraciones; i++) {
        console.log('waiting...')
    }
    return `${iteraciones} iteraciones realizadas`
}