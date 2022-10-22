import React, { useState } from "react";
import Form from "../UI/Form/Form";
import Row from "../UI/Row/Row";
import Buttons from "../UI/Button/Buttons";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import axios from "axios";
import Table from "../UI/Table/Table";
import { useSelector } from "react-redux";
import CreatePDF from "../CretaPDF/CreatePDF";

const StudentPayments = () => {
    const [selectedClass, setSelectedClass] = useState("");
    const [dbData, setDbData] = useState([]);
    const [oldDbData, setOldDbData] = useState([]);
    const [showDbData, setShowDbData] = useState(false);
    const tableHeaders = ["S/N", "Photo", "Name", "Admission No"];

    // @@ Fetch Classes from Redux
    const classes = useSelector(state => state.loadTeachers.Classes);

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
            setOldDbData(newArray);
            setShowDbData(true);
        } catch (error) {

        }
    }

    // create and download excel file
    const createExcelFile = () => {

    }

    // create and download pdf file
    const CreatePDFHandler = () => {
        CreatePDF({
            headers: tableHeaders,
            body: dbData
        });
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
            <Form className="Left" onSubmit={onSubmitHandler}>
                <Row>
                    <SelectElement
                        label="Class"
                        options={classes}
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
                        filter={onFilterHandler}
                        createExcelFile={createExcelFile}
                        createPdfFile={CreatePDFHandler}
                    />
                </React.Fragment> : null
            }
        </React.Fragment>
    );
};



export default StudentPayments;