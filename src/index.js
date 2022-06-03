import React from "react";
import ReactDOM from "react-dom"
import "./index.css"

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

ReactDOM.render(
    <>
        <p>Hello Sir,<span style={cssStyle}>{greeting}</span></p>
    </>,
    document.getElementById("root")
)