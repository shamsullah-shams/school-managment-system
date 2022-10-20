import React from "react";
import "./InputElement.css";


const SelectElement = props => {
    return (
        <div className="Form__Element">
            <div>{props.label}<span>*</span></div>
            <select {...props} >
                <option label=" " hidden></option>
                {
                    props.options.map(op => (
                        <option key={op} value={op}>{op}</option>
                    ))
                }
            </select>
            <small>some</small>
        </div>
    );
};


export default SelectElement;