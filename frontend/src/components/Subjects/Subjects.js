import React, { useState } from "react";
import Card from "../UI/Card/Card";
import Row from "../UI/Row/Row";
import AddSubject from "./AddSubject";



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