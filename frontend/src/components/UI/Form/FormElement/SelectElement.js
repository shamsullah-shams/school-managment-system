import React from "react";
import "./InputElement.css";


const SelectElement = props => {
    return (
        <div className="Form__Element">
            <div>{props.label}<span>*</span></div>
            <select>
                {
                    props.options.map(op => (
                        <option key={op}>{op}</option>
                    ))
                }
            </select>
        </div>
    );
};


export default SelectElement;