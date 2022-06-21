import React, { useState } from 'react'
import "./App.css"



export default function App() {

    let [num, add] = useState(1)

    const IncNum = () => {
        add(num++)
    }


    return (
        <>
            <div className='main'>
                <h1>{num}</h1>
                <button onClick={IncNum}>Click Me</button>
            </div>
        </>
    )
}
