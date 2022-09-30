import React from "react";
import "./AsideNavigationItem.css";


const AsideNavigationItem = props => {
    return (
        <li className="AsideNavigationItem">
            {
                props.children
            }
        </li>
    );
};


export default AsideNavigationItem;


