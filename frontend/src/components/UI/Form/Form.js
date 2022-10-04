import React from "react";
import "./Form.css";

const Form = props => {
    let classes = ["Form", props.className]
    return (
        <form {...props} className={classes.join(" ")}>
            {
                props.children
            }
        </form>
    );
};



export default Form;