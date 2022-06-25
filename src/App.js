import React, { useState } from 'react'
import './App.css'

function App() {
    // eslint-disable-next-line
    let [name, setName] = useState("")
    let [fullName, setFullName] = useState()

    let inputEvent = (event) => {
        setName = (event.target.value)
    }

    let onSubmit=()=>{
        setFullName(name)
    }

    return (
        <>
            <div className='main'>
                <h1>Hello {fullName}</h1>
                <input type="text" name="name" id="name" placeholder='Enter your Name' onChange={inputEvent} value={name} />
                <button onClick={onSubmit}>Click Me 😃</button>
            </div>
        </>
    )
}

export default App