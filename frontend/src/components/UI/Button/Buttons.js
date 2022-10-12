import React from "react";
import "./Buttons.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Buttons = props => {
    return (
        <div className="Buttons">
            <button>{props.title}</button>
        </div>
    );
};


export default Buttons;