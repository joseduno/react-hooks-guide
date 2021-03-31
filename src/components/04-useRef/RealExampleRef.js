import React, { useState } from 'react'
// import useFetch from '../../hooks/useFetch'
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks'

const RealExampleRef = () => {

    const [show, setShow] = useState(false)

    return (
        <div className='container mt-5'>
            <h1>RealExampleRef</h1>
            <button className='btn btn-primary mt-1' onClick={()=>{setShow(!show)}}>Show/Hide</button>
            {show && <MultipleCustomHooks />}
            <hr />
        </div>
    )
}

export default RealExampleRef
