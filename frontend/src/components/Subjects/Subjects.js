import React, { useState } from "react";
import Card from "../UI/Card/Card";
import Form from "../UI/Form/Form";
import InputElement from "../UI/Form/FormElement/InputElement";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import Row from "../UI/Row/Row";
import Buttons from "../UI/Button/Buttons";
import axios from "axios";



const AddSubject = props => {
    const [newSubject, setNewSubject] = useState({
        name: "",
        shortName: "",
        teacher: "",
        subjectClass: "",
    });

    const onChangeHandler = event => {
        const { name, value } = event.target;
        setNewSubject(prevState => {
            return {
                ...prevState,
                [name]: value,
            }
        })
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault(event);
        try {
            const result = await axios.post("http://localhost:8080/api/admin/subjects/create", {
                name: newSubject.name,
                shortName: newSubject.shortName,
                teacher: newSubject.teacher,
                subjectClass: newSubject.subjectClass,
            });

            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Form className="Left" onSubmit={onSubmitHandler}>
            <Row>
                <InputElement
                    label="Name"
                    placeholder="Name of Subject"
                    value={newSubject.name}
                    name="name"
                    onChange={onChangeHandler}
                />
            </Row>
            <Row>
                <InputElement
                    label="Short Name"
                    placeholder="Example B.eng"
                    value={newSubject.shortName}
                    name="shortName"
                    onChange={onChangeHandler}
                />
            </Row>
            <Row>
                <SelectElement
                    label="Class"
                    options={["level 1", "level 2"]}
                    name="subjectClass"
                    onChange={onChangeHandler}
                />
            </Row>
            <Row>
                <SelectElement
                    label="Teacher"
                    options={["shami", "faizi"]}
                    name="teacher"
                    onChange={onChangeHandler}
                />
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