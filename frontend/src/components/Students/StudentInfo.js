import axios from "axios";
import React, { useState } from "react";
import Buttons from "../UI/Button/Buttons";
import Form from "../UI/Form/Form";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import Row from "../UI/Row/Row";
import { useSelector } from "react-redux";
import Table from "../UI/Table/Table";




const StudentInfo = props => {
    const [selectedClass, setSelectedClass] = useState("");
    const [dbData, setDbData] = useState([]);
    const [oldDbData, setOldDbData] = useState([]);
    const [showDbData, setShowDbData] = useState(false);
    const tableHeaders = ["S/N", "Photo", "Name", "Addmission No", "Section", "Email", "Edit"];


    // Fetch Classes from Redux
    const classes = useSelector(state => state.loadTeachers.Classes);

    // onChange Function
    const onChangeHandler = event => {
        setSelectedClass(event.target.value);
    }

    // onChange Submit Function
    const onSubmitHandler = async (event) => {
        event.preventDefault(event);
        try {
            const result = await axios.get(`http://localhost:8080/api/admin/students/${selectedClass}`);
            console.log(result);
            let counter = 0;
            const newArray = result.data.map(singleStudent => {
                counter++;
                return [
                    counter,
                    singleStudent.imageUrl,
                    singleStudent.fullName,
                    singleStudent.addmissionNo,
                    singleStudent.section,
                    singleStudent.email,
                ]
            });

            setDbData(newArray);
            setOldDbData(newArray);
            setShowDbData(true);
        } catch (error) {

        }
    }

    // Filter Outputs
    const onFilterHandler = async (event) => {
        if (oldDbData.length === 0) {
            return;
        }
        const newArray = oldDbData.filter(SingleObject => {
            return SingleObject[2].includes(event.target.value);
        });
        setDbData(newArray);
    }


    return (
        <React.Fragment>
            <Form onSubmit={onSubmitHandler} className="Left">
                <Row>
                    <SelectElement label="Class" options={classes} onChange={onChangeHandler} />
                </Row>
                <Buttons title="Submit" />
            </Form>

            {
                showDbData ? <React.Fragment>
                    <Table
                        tableHeaders={tableHeaders}
                        tableBody={dbData}
                        filter={onFilterHandler}
                    />
                </React.Fragment> : null
            }

        </React.Fragment>
    );
};



export default StudentInfo;