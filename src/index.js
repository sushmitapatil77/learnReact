import React from "react";
import ReactDOM from "react-dom";

const fname = "Sush";
const lname = "P";
const luckyNum = 7;
ReactDOM.render(
  <div>
    {/* string interpreter {`${fname} ${lname}`}*/}
    <h1>Hello {fname + " " + lname}!</h1>
    <p>Your lucky number is {luckyNum}</p>
  </div>,
  document.getElementById("root")
);
