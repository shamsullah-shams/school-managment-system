import React, { useState } from "react";
import Card from "../UI/Card/Card";
import Form from "../UI/Form/Form";
import InputElement from "../UI/Form/FormElement/InputElement";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import Row from "../UI/Row/Row";
import Buttons from "../UI/Button/Buttons";



const AddSubject = props => {
    return (
        <Form className="Left">
            <Row>
                <InputElement label="Name" placeholder="Name of Subject" />
            </Row>
            <Row>
                <InputElement label="Short Name" placeholder="Example B.eng" />
            </Row>
            <Row>
                <SelectElement label="Class" options={["level 1", "level 2"]} />
            </Row>
            <Row>
                <SelectElement label="Teacher" options={["shami", "faizi"]} />
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



const Subjects = props => {

    const [addSubject, setAddSubject] = useState(true);
    const [manageSubjects, setManageSubjects] = useState(false);

    const addSubjectHandler = () => {
        setAddSubject(true);
        setManageSubjects(false);
    }

    const manageSubjectsHandler = () => {
        setAddSubject(false);
        setManageSubjects(true);
    }


    return (
        <main className="Main">
            <Card card title="Manage Subjects">
                <Row>
                    <div className="Buutons__Group">
                        <button className={addSubject ? "active__button" : ""} onClick={addSubjectHandler}>Add Subject</button>
                        <button className={manageSubjects ? "active__button" : ""} onClick={manageSubjectsHandler}>Manage Subjects</button>
                    </div>
                </Row>
                {
                    addSubject ? <AddSubject /> : null
                }
            </Card>
        </main>
    );
};



export default Subjects;