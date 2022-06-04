import React from 'react'
import './App.css'



function App() {

    let curDate = new Date();
    curDate = curDate.getHours();
    let greeting = "";
    let cssStyle = {};
    if (curDate >= 1 && curDate < 12) {
        greeting = "Good Morning"
        cssStyle.color = "green"
    } else if (curDate >= 12 && curDate < 20) {
        greeting = "Good Afternoon"
        cssStyle.color = "orange"

    } else {
        greeting = "Good Night"
    }

    return (
        <>
            <h1 style={{color:""}}>Hello Sir, <span style={cssStyle}>{greeting}</span></h1>
        </>)
}

export default App