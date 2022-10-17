import axios from "axios";
import React, { useState } from "react";
import Buttons from "../UI/Button/Buttons";
import Form from "../UI/Form/Form";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import Row from "../UI/Row/Row";
import Table from "../UI/Table/Table";
import { useSelector } from "react-redux";



const ManageSections = props => {
    const [dbData, setDbData] = useState([]);
    const [showDbData, setShowDbData] = useState(false);
    const [selectedClass, setSelectedClass] = useState("");
    const tableHeaders = ["S/N", "Name", "Class Name", "Teacher", "Edit"];

    // @@ fetch classes from Redux
    const classes = useSelector(state => state.loadTeachers.Classes);

    // @@ handling input changes
    const onChangeHandler = event => {
        setSelectedClass(event.target.value);
    }

    // @@ handling form submission
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            const result = await axios.get(`http://localhost:8080/api/admin/sections/${selectedClass}`);
            let counter = 0;
            const newArray = result.data.map(SingleObject => {
                counter++;
                return [
                    counter,
                    SingleObject.name,
                    SingleObject.className,
                    SingleObject.teacher,
                ]
            });
            setDbData(newArray);
            setShowDbData(true);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <React.Fragment>
            <Form className="Left" onSubmit={onSubmitHandler}>
                <Row>
                    <SelectElement
                        onChange={onChangeHandler}
                        label="Class"
                        options={classes}
                    />
                </Row>
                <Row>
                    <Buttons title="Submit" />
                </Row>
            </Form>

            {
                showDbData ? <React.Fragment>
                    <Table
                        tableHeaders={tableHeaders}
                        tableBody={dbData}
                    />
                </React.Fragment> : null
            }
        </React.Fragment>
    );
};



export default ManageSections;