import React, {memo} from 'react'

// La función memo hace que el componente sólo se renderice, si cambio una de sus
// propiedades, sin importar que su componente padre haya sido renderizado
// memoriza el valor de sus propiedades y si no cambian, aunque el componente padre
// cambie, el componente hijo con la funcion memo implementada, no lo hara!

const Small = memo(({value}) => {

    console.log('Hola desde Small component')

    return (
        <small>
            {value}
        </small>
    )
})

export default Small
