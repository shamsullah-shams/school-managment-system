import React from "react";
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

const AsideNavigationItems = props => {


    return (
        <div className="AsideNavigationItems">
            <NavLink to="/" className="Links" end>
                <AiOutlineHome />
                <span>Dashboard</span>
            </NavLink>
            <NavLink to="/timetable" className="Links">
                <HiAcademicCap />
                <span>Academics</span>
            </NavLink>
            <NavLink to="/administrative" className="Links">
                <MdOutlineAdminPanelSettings />
                <span>Administrative</span>
            </NavLink>
            <NavLink to="/students" className="Links">
                <HiUsers />
                <span>Students</span>
            </NavLink>
            <NavLink to="/users" className="Links">
                <FaUsers />
                <span>Users</span>
            </NavLink>
            <NavLink to="/classes" className="Links">
                <SiGoogleclassroom />
                <span>Classes</span>
            </NavLink>
            <NavLink to="/dormitories" className="Links">
                <HiHome />
                <span>Dormitories</span>
            </NavLink>
            <NavLink to="/sections" className="Links">
                <HiChartBar />
                <span>Sections</span>
            </NavLink>
            <NavLink to="/subjects" className="Links">
                <MdLocationOn />
                <span>Subjects</span>
            </NavLink>
            <NavLink to="/exams" className="Links">
                <ImBooks />
                <span>Exams</span>
            </NavLink>
            <NavLink to="/myaccount" className="Links">
                <RiAccountCircleLine />
                <span>My Account</span>
            </NavLink>
        </div>
    );
};


export default AsideNavigationItems;