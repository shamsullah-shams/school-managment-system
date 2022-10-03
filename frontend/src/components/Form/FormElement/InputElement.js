import React from "react";


const InputElement = props => {
    return (
        <div className="Form__Element">
            <div>{props.label}<span>*</span></div>
            <input {...props} />
        </div>
    );
};


export default InputElement;