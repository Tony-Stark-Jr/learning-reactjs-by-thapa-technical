import React from 'react'
import './App.css'
import { add, subtract, multiply, division } from './Calculator'



function App() {


    return (
        <>
            <ul>
                <li>Sum of two no. is: {add(30, 5)}</li>
                <li>Subtract of two no. is: {subtract(30, 5)}</li>
                <li>Multiply of two no. is: {multiply(30, 5)}</li>
                <li>Divison of two no. is: {division(30, 5)}</li>
            </ul>
        </>)
}

export default App