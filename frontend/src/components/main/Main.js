import React from "react";
import "./Main.css";
import Card from "../Card/Card";


const Main = props => {
    return (
        <React.Fragment>
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
                <Card card title="TimeTable">Card</Card>
            </main>
        </React.Fragment>
    );
};



export default Main;