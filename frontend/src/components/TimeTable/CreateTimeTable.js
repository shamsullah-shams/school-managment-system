import React, { useState } from "react";
import Form from "../UI/Form/Form";
import InputElement from "../UI/Form/FormElement/InputElement";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import Row from "../UI/Row/Row";
import Buttons from "../UI/Button/Buttons";
import axios from "axios";




const CreateTimeTable = props => {

    const [timeTable, setTimeTable] = useState({
        name: "",
        className: "",
        type: "",
    });


    const onChangeHandler = event => {
        const { name, value } = event.target;
        setTimeTable(prevState => {
            return {
                ...prevState,
                [name]: value,
            }
        })
    };


    const onSubmitHandler = async (event) => {
        event.preventDefault(event);
        try {
            const result = await axios.post("http://localhost:8080/api/admin/timetable/create", {
                timeTable: timeTable,
            })
        } catch (error) {
            console.log(error);
        }
    }

    let date = new Date();
    let year = date.getFullYear().toString();


    return (
        <Form className="Left" onSubmit={onSubmitHandler}>
            <Row>
                <InputElement
                    label="Name"
                    placeholder="Enter Name"
                    value={timeTable.name}
                    name="name"
                    onChange={onChangeHandler}
                />
            </Row>

            <Row>
                <SelectElement
                    label="Class"
                    options={["Nursery", "Level 1", "Level 2"]}
                    name="className"
                    onChange={onChangeHandler}
                />
            </Row>

            <Row>
                <SelectElement
                    label="Type"
                    options={["Class TimeTable", "Exam TimeTable"]}
                    name="type"
                    onChange={onChangeHandler}
                />
            </Row>
            <Row>
                <Buttons title="Next" />
            </Row>

        </Form>
    );
}



export default CreateTimeTable;