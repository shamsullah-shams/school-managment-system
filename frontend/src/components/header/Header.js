import React from "react";
import "./Header.css";



const Header = props => {
    return (
        <header className="Header">
            <div className="Project__Name">
                School Management System
            </div>
            <div className="Header__Body">
                <div>
                    meunu
                </div>
                <div>
                    user
                </div>
            </div>
        </header>
    );
};



export default Header;