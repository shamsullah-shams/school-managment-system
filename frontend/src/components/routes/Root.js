import React from "react";
import Card from "../Card/Card";
import Calender from "../Calender/Calender";


const Root = props => {
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
            <Card card title="School Events Calendar">
                <Calender />
            </Card>
        </main>
    );
};


export default Root;