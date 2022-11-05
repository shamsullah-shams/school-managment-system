import React from "react";
import "./Buttons.css";
const Buttons = props => {
    return (
        <div className="Buttons" {...props}>
            <button>{props.title}</button>
        </div>
    );
};


export default Buttons;