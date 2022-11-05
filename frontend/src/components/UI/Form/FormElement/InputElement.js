import React from "react";
import "./InputElement.css";

let input = 0;

const InputElement = props => {
    console.log("input : ", ++input);
    return (
        <div className="Form__Element">
            <div>{props.label}: <span>*</span></div>
            <input {...props} />
            <small>sol</small>
        </div>
    );
};


export default InputElement;