import React from "react";
import ReactDOM from "react-dom";

let date = new Date();
ReactDOM.render(
    <div>
        <h1>My Name is Santosh Marar</h1>
        <p>Today Date is {date.toDateString()}</p>
        <p>Current Time is {date.toLocaleTimeString()}</p>
    </div>,
    document.getElementById("root")
)