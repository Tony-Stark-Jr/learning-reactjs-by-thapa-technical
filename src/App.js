import React, { useState } from 'react'
import './App.css'

function App() {

    const purple = '#8e44ad';
    const yellow = 'yellow'

    const iName = "Click Me"

    const [bg, setBg] = useState(purple)
    const [name, setName] = useState(iName);

    const bgChange = () => {
        setBg(yellow)
        setName("Aeey 😠")
    }

    const bgBack = () => {
        setBg(purple)
        setName(iName)
    }

    return (
        <>
            <div className="main" style={{ backgroundColor: bg }}>
                <button onClick={bgChange} onDoubleClick={bgBack}>{name}</button>
            </div>
        </>
    )
}

export default App