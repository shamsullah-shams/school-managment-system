import React, { useContext } from "react";
import "./Header.css";
import { AiOutlineMenuFold, AiOutlineMenuUnfold } from "react-icons/ai";
import Context from "../../Cotext";



const Header = props => {

    const { showSideBarSpans, setShowSideBarSpans } = useContext(Context);
    const sideBarHandler = () => {
        setShowSideBarSpans(!showSideBarSpans);
    }

    return (
        <header className="Header">
            <div className="Project__Name">
                School Management System
            </div>
            <div className="Header__Body">
                {
                    showSideBarSpans ?
                        <AiOutlineMenuFold onClick={sideBarHandler} />
                        : <AiOutlineMenuUnfold onClick={sideBarHandler} />
                }
                <div>
                    user
                </div>
            </div>
        </header>
    );
};



export default Header;