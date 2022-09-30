import React from "react";


const FormElement = props => {
    return (
        <div className="Form__Element">
            <label>{props.label}<span>*</span></label>
            <input {...props} />
        </div>
    );
};


export default FormElement;