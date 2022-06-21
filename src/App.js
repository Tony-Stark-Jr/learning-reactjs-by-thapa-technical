import React, { useState } from 'react'
import "./App.css"



export default function App() {


    let date = new Date();
    let currentTime = date.toLocaleTimeString()


    // eslint-disable-next-line
    const [time, setTime] = useState(currentTime)

    const getCurrentTime = () => {
    //    setInterval(() => {
        setTime(currentTime)
    //    }, 1000);
    }

    return (
        <>
            <div className='main'>
                <h1>{currentTime}</h1>
                <button onClick={getCurrentTime}>Click Me</button>
            </div>
        </>
    )
}
