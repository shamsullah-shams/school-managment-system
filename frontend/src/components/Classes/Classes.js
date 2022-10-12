import React, { useState } from "react";
import Card from "../UI/Card/Card";
import Row from "../UI/Row/Row";
import "../Administrative.css";
import CreateClass from "./CreateClass";





const Classes = props => {

    const [createClass, setCreateClasses] = useState(true);
    const [manageClasses, setManageClasses] = useState(false);

    const createClassHandler = () => {
        setCreateClasses(true);
        setManageClasses(false);
    }

    const manageClassesHandler = () => {
        setCreateClasses(false);
        setManageClasses(true);
    }


    return (
        <main className="Main">
            <Card card title="Manage Classes">
                <Row>
                    <div className="Buutons__Group">
                        <button className={createClass ? "active__button" : ""} onClick={createClassHandler}>Create Class</button>
                        <button className={manageClasses ? "active__button" : ""} onClick={manageClassesHandler}>Manage Class</button>
                    </div>
                </Row>
                {
                    createClass ? <CreateClass /> : null
                }

            </Card>
        </main>
    );
};



export default Classes;