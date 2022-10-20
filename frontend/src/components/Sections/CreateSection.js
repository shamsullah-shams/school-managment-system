import React, { useState } from "react";
import axios from "axios";
import Form from "../UI/Form/Form";
import InputElement from "../UI/Form/FormElement/InputElement";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import Buttons from "../UI/Button/Buttons";
import Row from "../UI/Row/Row";
import { useSelector, useDispatch } from "react-redux";
import { loadTeacher } from "../../Redux/actions/Teacher";



const CreateSection = () => {
    const [section, setSection] = useState({
        name: "",
        className: "",
        teacher: "",
    });

    const dispatch = useDispatch();

    // @@ Fetch Teachers and classes from Redux
    const teachers = useSelector(state => state.loadTeachers.Teachers);
    const classes = useSelector(state => state.loadTeachers.Classes);

    const onChangeHandler = event => {
        const { name, value } = event.target;
        setSection(prevState => {
            return {
                ...prevState,
                [name]: value,
            }
        })
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault(event);
        try {
            const result = await axios.post("http://localhost:8080/api/admin/sections/create", {
                name: section.name,
                className: section.className,
                teacher: section.teacher,
            });

            dispatch(loadTeacher());
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <Form className="Left" onSubmit={onSubmitHandler}>
            <Row>
                <InputElement
                    label="Name"
                    placeholder="Section Name"
                    value={section.name}
                    name="name"
                    onChange={onChangeHandler}
                />
            </Row>
            <Row>
                <SelectElement
                    label="Select Class"
                    options={classes}
                    name="className"
                    onChange={onChangeHandler}
                />
            </Row>
            <Row>
                <SelectElement
                    label="Teacher"
                    options={teachers}
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


export default CreateSection;