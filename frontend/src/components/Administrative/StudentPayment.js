import React, { useState } from "react";
import Form from "../UI/Form/Form";
import Row from "../UI/Row/Row";
import Buttons from "../UI/Button/Buttons";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import axios from "axios";
import Table from "../UI/Table/Table";

const StudentPayments = () => {
    const [selectedClass, setSelectedClass] = useState("");
    const [dbData, setDbData] = useState([]);
    const [showDbData, setShowDbData] = useState(false);
    const tableHeaders = ["S/N", "Photo", "Name", "Admission No", "Manage Payments"];

    const onChangeHandler = event => {
        setSelectedClass(event.target.value);
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault(event);
        // send Request to API //
        try {
            const result = await axios.get(`http://localhost:8080/api/admin/students/${selectedClass}`);
            let counter = 0;
            const newArray = result.data.map(singleStudent => {
                counter++;
                return [
                    counter,
                    singleStudent.imageUrl,
                    singleStudent.fullName,
                    singleStudent.addmissionNo,
                ]
            });

            setDbData(newArray);
            setShowDbData(true);
        } catch (error) {

        }
    }


    return (
        <React.Fragment>
            <Form className="Left" onSubmit={onSubmitHandler}>
                <Row>
                    <SelectElement
                        label="Class"
                        options={["level 1", "level 2"]}
                        onChange={onChangeHandler}
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



export default StudentPayments;