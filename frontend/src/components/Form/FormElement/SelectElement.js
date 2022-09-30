import React from "react";


const SelectElement = props => {
    return (
        <div className="Form__Element">
            <label>{props.label}<span>*</span></label>
            <select>
                {
                    props.options.map(op => (
                        <option>{op}</option>
                    ))
                }
            </select>
        </div>
    );
};


export default SelectElement;