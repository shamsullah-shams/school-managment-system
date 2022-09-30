import React from "react";
import "./AsideNavigationItem.css";


const AsideNavigationItem = props => {
    return (
        <li className="AsideNavigationItem">
            <a href="#">
                {
                    props.children
                }
            </a>
        </li>
    );
};


export default AsideNavigationItem;


