import React, { useContext, useState } from "react";
import Card from "../Card/Card";
import Calender from "../Calender/Calender";
import { FaUsers } from "react-icons/fa"
import Box from "../Box/Box";



const Root = props => {
    const [showContent, setShowContent] = useState(true);
    const showContentHandler = () => {
        setShowContent(false);
    }

    return (
        <main className="Main">
            <Card>some</Card>
            <div className="Boxes">
                <Box>Students</Box>
                <Box>Teacher</Box>
                <Box>Administrators</Box>
                <Box>Parents</Box>
            </div>
            {
                showContent ?
                    <Card card title="School Events Calendar" onClick={showContentHandler}>
                        <Calender />
                    </Card>
                    : null
            }
        </main>
    );
};


export default Root;