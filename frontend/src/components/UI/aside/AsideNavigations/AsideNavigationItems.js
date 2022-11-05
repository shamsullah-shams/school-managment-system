import React from "react";
import "./AsideNavigationItems.css";
import { NavLink } from "react-router-dom"
import { AiOutlineHome } from "react-icons/ai";
import { HiAcademicCap, HiChartBar } from "react-icons/hi"
import { MdOutlineAdminPanelSettings, MdLocationOn } from "react-icons/md"
import { FaUsers } from "react-icons/fa"
import { HiUsers } from "react-icons/hi"
import { SiGoogleclassroom } from "react-icons/si"
import { ImBooks } from "react-icons/im";
import { RiAccountCircleLine } from "react-icons/ri";


import ListItemButton from '@mui/material/ListItemButton';
import Divider from '@mui/material/Divider';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';


const AsideNavigationItems = () => {

    return (
        <nav>
            <NavLink to="/" className="Links" end>
                <ListItemButton>
                    <ListItemIcon>
                        <AiOutlineHome />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" />
                </ListItemButton>
            </NavLink>
            <NavLink to="/academics" className="Links">
                <ListItemButton>
                    <ListItemIcon>
                        <HiAcademicCap />
                    </ListItemIcon>
                    <ListItemText primary="Academics" />
                </ListItemButton>
            </NavLink>
            <NavLink className="Links" to="/administrative">
                <ListItemButton>
                    <ListItemIcon>
                        <MdOutlineAdminPanelSettings />
                    </ListItemIcon>
                    <ListItemText primary="Administrative" />
                </ListItemButton>
            </NavLink>
            <NavLink to="/students" className="Links">
                <ListItemButton>
                    <ListItemIcon>
                        <FaUsers />
                    </ListItemIcon>
                    <ListItemText primary="Students" />
                </ListItemButton>
            </NavLink>
            <Divider sx={{ my: 1 }} />
            <NavLink to="/users" className="Links">
                <ListItemButton>
                    <ListItemIcon>
                        <HiUsers />
                    </ListItemIcon>
                    <ListItemText primary="Users" />
                </ListItemButton>
            </NavLink>
            <NavLink to="/classes" className="Links">
                <ListItemButton>
                    <ListItemIcon>
                        <SiGoogleclassroom />
                    </ListItemIcon>
                    <ListItemText primary="Classes" />
                </ListItemButton>
            </NavLink>
            <NavLink to="/sections" className="Links">
                <ListItemButton>
                    <ListItemIcon>
                        <HiChartBar />
                    </ListItemIcon>
                    <ListItemText primary="Sections" />
                </ListItemButton>
            </NavLink>
            <NavLink to="/subjects" className="Links">
                <ListItemButton>
                    <ListItemIcon>
                        <MdLocationOn />
                    </ListItemIcon>
                    <ListItemText primary="Subjects" />
                </ListItemButton>
            </NavLink>
            <NavLink to="/exams" className="Links">
                <ListItemButton>
                    <ListItemIcon>
                        <ImBooks />
                    </ListItemIcon>
                    <ListItemText primary="Exams" />
                </ListItemButton>
            </NavLink>
            <NavLink to="/myaccount" className="Links">
                <ListItemButton>
                    <ListItemIcon>
                        <RiAccountCircleLine />
                    </ListItemIcon>
                    <ListItemText primary="Manage Account" />
                </ListItemButton>
            </NavLink>
        </nav>
    );
};


export default AsideNavigationItems;