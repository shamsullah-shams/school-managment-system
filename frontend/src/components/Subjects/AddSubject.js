import React, { useState } from "react";
import axios from "axios";
import Form from "../UI/Form/Form";
import InputElement from "../UI/Form/FormElement/InputElement";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import Row from "../UI/Row/Row";
import Buttons from "../UI/Button/Buttons";




const AddSubject = props => {
    const [newSubject, setNewSubject] = useState({
        name: "",
        shortName: "",
        teacher: "",
        className: "",
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
                className: newSubject.className,
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
                    name="className"
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
                <Buttons title="Submit" />
            </Row>
        </Form>
    );
}



export default AddSubject;