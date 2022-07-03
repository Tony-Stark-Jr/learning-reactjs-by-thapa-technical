import React, { useState } from 'react'
import './App.css'

function App() {

    const [num, setNum] = useState(0);


    const increase = () => {
        setNum(() => {
            return num + 1
        })
    }

    const decrease = () => {
        if (num > 0) {
            setNum(() => {
                return num - 1
            })
        }
        else {
            alert("Sorry, Zero Limit Reach")
            setNum(0)
        }
    }


    return (
        <>
            <div className="main">
                <div className="center-box">
                    <div className="num">{num}</div>
                    <div className="buttons">
                        <button className="increm" onClick={increase}>Increm</button>
                        <button className="decrem" onClick={decrease}>Decrem</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default App