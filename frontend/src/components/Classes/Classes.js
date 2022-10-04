import React, { useState } from "react";
import Card from "../UI/Card/Card";
import Form from "../UI/Form/Form";
import InputElement from "../UI/Form/FormElement/InputElement";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import Row from "../UI/Row/Row";
import Buttons from "../UI/Button/Buttons";
import "../Administrative.css";



const CreateClass = props => {
    return (
        <Form className="Left">
            <Row>
                <InputElement label="Class Name" />
            </Row>
            <Row>
                <SelectElement label="Class Type" options={["level 1", "level 2", "level 3"]} />
            </Row>
            <Row>
                <Buttons
                    previos={{ title: "Previos" }}
                    next={{ title: "Next" }}
                />
            </Row>
        </Form>
    );
}



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
                        <button className={createClass ? "active__button" : ""} onClick={createClassHandler}>Create User</button>
                        <button className={manageClasses ? "active__button" : ""} onClick={manageClassesHandler}>Manage Users</button>
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