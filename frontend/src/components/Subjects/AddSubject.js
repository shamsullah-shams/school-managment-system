import React, { useState } from "react";
import axios from "../../api/axios";
import Form from "../UI/Form/Form";
import InputElement from "../UI/Form/FormElement/InputElement";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import Row from "../UI/Row/Row";
import Buttons from "../UI/Button/Buttons";
import { useSelector } from "react-redux"
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// URLS
const CREATE_SUBJECT_URL = "/api/admin/subjects/create";

const AddSubject = () => {


    // @@ Fetch Teachers and Classes from Redux;
    const teachers = useSelector(state => state.loadTeachers.Teachers);
    const classes = useSelector(state => state.loadTeachers.Classes);


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
            const result = await axios.post(CREATE_SUBJECT_URL, {
                name: newSubject.name,
                shortName: newSubject.shortName,
                teacher: newSubject.teacher,
                className: newSubject.className,
            });
            if (result.status === 200) {
                // Clear Old Values
                let newObject = {};
                for (let i in newSubject) {
                    newObject[i] = "";
                }
                setNewSubject({ ...newObject });
                // show toast succes message
                toast.success("Subject successfully added");
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <React.Fragment>
            {/* Showing Toast Notification */}
            <ToastContainer
                autoClose={5000}
            />
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
                        options={classes}
                        name="className"
                        value={newSubject.className}
                        onChange={onChangeHandler}
                    />
                </Row>
                <Row>
                    <SelectElement
                        label="Teacher"
                        options={teachers}
                        name="teacher"
                        value={newSubject.teacher}
                        onChange={onChangeHandler}
                    />
                </Row>
                <Row>
                    <Buttons title="Submit" />
                </Row>
            </Form>
        </React.Fragment>
    );
}



export default AddSubject;