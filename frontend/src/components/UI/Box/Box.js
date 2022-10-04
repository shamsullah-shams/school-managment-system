import React from "react";
import "./Box.css";


const Box = props => {
    let classes = ["Box", props.className]
    return (
        <div className={classes.join(" ")}>
            {
                props.children
            }
        </div>
    );
};


export default Box;