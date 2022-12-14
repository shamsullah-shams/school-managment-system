import React from "react";
import "./InputElement.css";


const InputElement = props => {
    return (
        <div className="Form__Element">
            <div>{props.label}: <span>*</span></div>
            <input {...props} />
            <small>sol</small>
        </div>
    );
};


export default InputElement;