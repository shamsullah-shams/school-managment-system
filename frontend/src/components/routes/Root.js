import React, { useContext, useState } from "react";
import Card from "../Card/Card";
import Calender from "../Calender/Calender";
import Context from "../../Cotext";



const Root = props => {
    const [showContent, setShowContent] = useState(true);
    const showContentHandler = () => {
        setShowContent(false);
    }

    return (
        <main className="Main">
            <Card>some</Card>
            <div className="Boxes">
                <Card
                    className="Students"
                >
                    Students
                </Card>
                <Card
                    className="Teachers"
                >
                    Teachers
                </Card>
                <Card
                    className="Administrators"
                >
                    Administrators
                </Card>
                <Card
                    className="Parents"
                >
                    Parents
                </Card>
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