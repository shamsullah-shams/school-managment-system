import React from "react";
import "./Form.css";

const Form = props => {
    return (
        <form {...props} className="Form">
            {
                props.children
            }
        </form>
    );
};



export default Form;