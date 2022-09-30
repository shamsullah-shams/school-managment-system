import React from "react";
import "./Card.css";
import { UilUsersAlt } from '@iconscout/react-unicons'

const Card = props => {

    let classes = ["Card", props.className];


    return (
        <div className={classes.join(" ")}>
            {
                props.children
            }
        </div>
    );
};


export default Card;