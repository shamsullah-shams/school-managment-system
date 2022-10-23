import React, { useContext, useState } from "react";
import Card from "../UI/Card/Card";
import Calender from "../UI/Calender/Calender";
import { FaUsers, FaHandPointUp, FaUserAlt } from "react-icons/fa"
import { HiUsers } from "react-icons/hi";
import Box from "../UI/Box/Box";
import "../Root.css";



const Root = props => {
    const [showContent, setShowContent] = useState(true);
    const showContentHandler = () => {
        setShowContent(false);
    }

    return (
        <main className="Main">
            <Card>some</Card>
            <div className="Boxes">
                <Box className="Students">
                    Students
                    <FaUsers />
                </Box>
                <Box className="Teachers">
                    Teacher
                    <HiUsers />
                </Box>
                <Box className="Administrators">
                    Administrators
                    <FaHandPointUp />
                </Box>
                <Box className="Parents">
                    Parents
                    <FaUserAlt />
                </Box>
            </div>
            {/* {
                showContent ?
                    <Card card title="School Events Calendar" onClick={showContentHandler}>
                        <Calender />
                    </Card>
                    : null
            } */}
        </main>
    );
};


export default Root;