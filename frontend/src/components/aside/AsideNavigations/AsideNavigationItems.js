import React from "react";
import AsideNavigationItem from "./AsideNavigationItem/AsideNavigationItem";
import "./AsideNavigationItems.css";


const AsideNavigationItems = props => {
    return (
        <div className="AsideNavigationItems">
            <AsideNavigationItem>Dashboard</AsideNavigationItem>
            <AsideNavigationItem>Academics</AsideNavigationItem>
            <AsideNavigationItem>Administrative</AsideNavigationItem>
            <AsideNavigationItem>Students</AsideNavigationItem>
            <AsideNavigationItem>Users</AsideNavigationItem>
            <AsideNavigationItem>Classes</AsideNavigationItem>
            <AsideNavigationItem>Dormitories</AsideNavigationItem>
            <AsideNavigationItem>Sections</AsideNavigationItem>
            <AsideNavigationItem>Subjects</AsideNavigationItem>
            <AsideNavigationItem>Exams</AsideNavigationItem>
            <AsideNavigationItem>My Account</AsideNavigationItem>
        </div>
    );
};


export default AsideNavigationItems;