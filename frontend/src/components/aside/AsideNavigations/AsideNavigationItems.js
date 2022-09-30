import React from "react";
import AsideNavigationItem from "./AsideNavigationItem/AsideNavigationItem";
import "./AsideNavigationItems.css";
import { Link } from "react-router-dom"


const AsideNavigationItems = props => {
    return (
        <div className="AsideNavigationItems">
            <Link to="/" className="Links">
                <AsideNavigationItem>Dashboard</AsideNavigationItem>
            </Link>
            <Link to="/timetable" className="Links">
                <AsideNavigationItem>Academics</AsideNavigationItem>
            </Link>
            <Link to="/administrative" className="Links">
                <AsideNavigationItem>Administrative</AsideNavigationItem>
            </Link>
            <Link to="/students" className="Links">
                <AsideNavigationItem>Students</AsideNavigationItem>
            </Link>
            <Link to="/users" className="Links">
                <AsideNavigationItem>Users</AsideNavigationItem>
            </Link>
            <Link to="/classes" className="Links">
                <AsideNavigationItem>Classes</AsideNavigationItem>
            </Link>
            <Link to="/dormitories" className="Links">
                <AsideNavigationItem>Dormitories</AsideNavigationItem>
            </Link>
            <Link to="/sections" className="Links">
                <AsideNavigationItem>Sections</AsideNavigationItem>
            </Link>
            <Link to="/subjects" className="Links">
                <AsideNavigationItem>Subjects</AsideNavigationItem>
            </Link>
            <Link to="/exams" className="Links">
                <AsideNavigationItem>Exams</AsideNavigationItem>
            </Link>
            <Link to="/myaccount" className="Links">
                <AsideNavigationItem>My Account</AsideNavigationItem>
            </Link>
        </div>
    );
};


export default AsideNavigationItems;