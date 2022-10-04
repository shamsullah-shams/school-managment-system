import React, { useContext, useState } from "react";
import "./AsideNavigationItems.css";
import { NavLink } from "react-router-dom"
import { AiOutlineHome } from "react-icons/ai";
import { HiAcademicCap, HiHome, HiChartBar } from "react-icons/hi"
import { MdOutlineAdminPanelSettings, MdLocationOn } from "react-icons/md"
import { FaUsers } from "react-icons/fa"
import { HiUsers } from "react-icons/hi"
import { SiGoogleclassroom } from "react-icons/si"
import { ImBooks } from "react-icons/im";
import { RiAccountCircleLine } from "react-icons/ri";
import Span from "./Span";
import Context from "../../../../Cotext";

const AsideNavigationItems = props => {

    const [showStudentSubMenu, setShowStudentSubMenu] = useState(false);
    const [showAdminSubMenu, setShowAdminSubmenu] = useState(false);

    const { showSideBarSpans } = useContext(Context);

    const showStudentSubMenuHandler = () => {
        setShowAdminSubmenu(false);
        setShowStudentSubMenu(!showStudentSubMenu);
    }
    const showAdminSubMenuHandler = () => {
        setShowStudentSubMenu(false);
        setShowAdminSubmenu(!showAdminSubMenu);
    }


    return (
        <nav className="AsideNavigationItems">
            <NavLink to="/" className="Links" end>
                <AiOutlineHome />
                <Span title="Dashboard" />
            </NavLink>
            <NavLink to="/academics" className="Links">
                <HiAcademicCap />
                <Span title="Academics" />
            </NavLink>
            <NavLink className="Links" to="/administrative">
                <MdOutlineAdminPanelSettings />
                <Span title="Administrative" />
            </NavLink>
            <NavLink to="/students" className="Links">
                <FaUsers />
                <Span title="Students" />
            </NavLink>
            <NavLink to="/users" className="Links">
                <HiUsers />
                <Span title="Users" />
            </NavLink>
            <NavLink to="/classes" className="Links">
                <SiGoogleclassroom />
                <Span title="Classes" />
            </NavLink>
            <NavLink to="/sections" className="Links">
                <HiChartBar />
                <Span title="Sections" />
            </NavLink>
            <NavLink to="/subjects" className="Links">
                <MdLocationOn />
                <Span title="Subjects" />
            </NavLink>
            <NavLink to="/exams" className="Links">
                <ImBooks />
                <Span title="Exams" />
            </NavLink>
            <NavLink to="/myaccount" className="Links">
                <RiAccountCircleLine />
                <Span title="My Account" />
            </NavLink>
        </nav>
    );
};


export default AsideNavigationItems;