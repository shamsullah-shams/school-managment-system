import React, { useState } from "react";
import axios from "../../api/axios";
import Form from "../UI/Form/Form";
import InputElement from "../UI/Form/FormElement/InputElement";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import Row from "../UI/Row/Row";
import Buttons from "../UI/Button/Buttons";
import { useDispatch } from "react-redux";
import { loadTeacher } from "../../Redux/actions/Teacher";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

// URLS 
const CREATE_CLASS_URL = "/api/admin/classes/create";
const CreateClass = props => {

    const [newClass, setNewClass] = useState({
        name: "",
        type: "",
    });

    const dispatch = useDispatch();

    const onChangeHandler = event => {
        const { name, value } = event.target;
        setNewClass(prevState => {
            return {
                ...prevState,
                [name]: value,
            }
        })
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault(event);
        try {
            const result = await axios.post(CREATE_CLASS_URL, {
                newClass: newClass,
            });
            console.log(result);

            if (result.status === 200) {
                // Dispatch New Action from Redux
                dispatch(loadTeacher());
                // display a toast success message
                toast.success("Class is added");
                // clear old input values
                let newObject = {};
                for (let i in newClass) {
                    newObject[i] = "";
                }
                setNewClass({ ...newObject });
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
            <Form className="Left" >
                <Row>
                    <InputElement
                        label="Class Name"
                        placeholder="Class Name"
                        name="name"
                        value={newClass.name}
                        onChange={onChangeHandler}
                    />
                </Row>
                <Row>
                    <SelectElement
                        label="Class Type"
                        options={["Primary", "Secondary", "Nurssry", "intermediat"]}
                        name="type"
                        value={newClass.type}
                        onChange={onChangeHandler}
                    />
                </Row>
                <Row>
                    <Buttons title="Submit" onClick={onSubmitHandler} />

                </Row>
            </Form>
        </React.Fragment>
    );
}



export default CreateClass;