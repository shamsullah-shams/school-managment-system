import React, { useState } from "react";
import Form from "../UI/Form/Form";
import InputElement from "../UI/Form/FormElement/InputElement";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import Row from "../UI/Row/Row";
import Buttons from "../UI/Button/Buttons";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';




const CreateTimeTable = props => {

    const [timeTable, setTimeTable] = useState({
        name: "",
        className: "",
        type: "",
    });

    // @@ Fetch Classes from Redux
    const classes = useSelector(state => state.loadTeachers.Classes);

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
            if (result.status === 200) {
                // clear old values
                let newObject = {};
                for (let i in timeTable) {
                    newObject[i] = "";
                }
                setTimeTable({ ...newObject });
                // show toast success message
                toast.success("Time Table successfully added");
            }
        } catch (error) {
            toast.error(error.message);
        }
    }



    return (
        <React.Fragment>
            <ToastContainer autoClose={5000} />
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
                        options={classes}
                        name="className"
                        value={timeTable.className}
                        onChange={onChangeHandler}
                    />
                </Row>

                <Row>
                    <SelectElement
                        label="Type"
                        options={["Class TimeTable", "Exam TimeTable"]}
                        name="type"
                        value={timeTable.type}
                        onChange={onChangeHandler}
                    />
                </Row>
                <Row>
                    <Buttons title="Next" />
                </Row>

            </Form>
        </React.Fragment>
    );
}



export default CreateTimeTable;