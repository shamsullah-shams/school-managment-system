import React from "react";
import Card from "../Card/Card";
import { UilUsersAlt } from '@iconscout/react-unicons'
import "./Main.css";


const Main = props => {
    return (
        <React.Fragment>
            <main className="Main">
                <div className="Main__Header">
                    sdjfk
                </div>
                <div className="ClassForCards">
                    <Card className="Users">
                        <UilUsersAlt />
                        user
                    </Card>
                    <Card className="Students">students</Card>
                    <Card className="Parents">parents</Card>
                    <Card className="Teachers">Teachers</Card>
                </div>
            </main>
        </React.Fragment>
    );
};



export default Main;