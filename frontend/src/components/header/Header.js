import React from "react";
import "./Header.css";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";



const Header = props => {
    return (
        <header className="Header">
            <div className="Project__Name">
                School Management System
            </div>
            <div className="Header__Body">
                <AiOutlineMenuFold />
                <div>
                    user
                </div>
            </div>
        </header>
    );
};



export default Header;