import React, { useState } from "react";
import axios from "../../api/axios";
import Form from "../UI/Form/Form";
import InputElement from "../UI/Form/FormElement/InputElement";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import Buttons from "../UI/Button/Buttons";
import Row from "../UI/Row/Row";
import { useSelector, useDispatch } from "react-redux";
import { loadTeacher } from "../../Redux/actions/Teacher";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// URLS
const CREATE_SECTION_URL = "/api/admin/sections/create";

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
            const result = await axios.post(CREATE_SECTION_URL, { ...section });
            if (result.status === 200) {
                // clear old values
                let newObject = {};
                for (let i in section) {
                    newObject[i] = "";
                }
                setSection({ ...newObject });
                // dispatch new Action from Redux
                dispatch(loadTeacher());
                // show toast success message
                toast.success("Section is Added");
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
                        value={section.className}
                        onChange={onChangeHandler}
                    />
                </Row>
                <Row>
                    <SelectElement
                        label="Teacher"
                        options={teachers}
                        name="teacher"
                        value={section.teacher}
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


export default CreateSection;