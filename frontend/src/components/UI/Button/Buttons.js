import React from "react";
import "./Buttons.css";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

const Buttons = props => {
    return (
        <div className="Buttons">
            <button {...props.previos} className="Previous">
                <AiOutlineArrowLeft />
                {props.previos.title}
            </button>
            <button {...props.next} className="Next">
                {props.next.title}
                <AiOutlineArrowRight />
            </button>
        </div>
    );
};


export default Buttons;