import React, { useState } from "react";
import axios from "axios";
import Form from "../UI/Form/Form";
import InputElement from "../UI/Form/FormElement/InputElement";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import Row from "../UI/Row/Row";
import Buttons from "../UI/Button/Buttons";
import { useDispatch } from "react-redux";
import { loadTeacher } from "../../Redux/actions/Teacher";


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
            const result = await axios.post("http://localhost:8080/api/admin/classes/create", {
                newClass: newClass,
            })
            dispatch(loadTeacher())
            // console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Form className="Left" onSubmit={onSubmitHandler} >
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
                    onChange={onChangeHandler}
                />
            </Row>
            <Row>
                <Buttons title="Submit" />

            </Row>
        </Form>
    );
}



export default CreateClass;