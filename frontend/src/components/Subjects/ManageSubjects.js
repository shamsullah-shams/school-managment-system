import axios from "axios";
import React, { useState } from "react";
import Buttons from "../UI/Button/Buttons";
import Form from "../UI/Form/Form";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import Row from "../UI/Row/Row";
import Table from "../UI/Table/Table";
import { useSelector } from "react-redux";
import CreatePDF from "../CretaPDF/CreatePDF";


const ManageSubjects = () => {

    const [dbData, setDbData] = useState([]);
    const [oldDbData, setOldDbData] = useState([]);
    const [showDbData, setShowDbData] = useState(false);
    const [selectedClass, setSelectedClass] = useState("");
    const tableHeaders = ["S/N", "Name", "Short Name", "Class", "Teacher"];

    // Fetch Classes from Redux
    const classes = useSelector(state => state.loadTeachers.classes);


    // @@ handling input changes
    const onChangeHandler = event => {
        setSelectedClass(event.target.value);
    }

    // @@ handling form submission
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            const result = await axios.get(`http://localhost:8080/api/admin/subjects/${selectedClass}`);
            let counter = 0;
            const newArray = result.data.map(SingleObject => {
                counter++;
                return [
                    counter,
                    SingleObject.name,
                    SingleObject.shortName,
                    SingleObject.className,
                    SingleObject.teacher,
                ]
            });
            setDbData(newArray);
            setOldDbData(newArray);
            setShowDbData(true);
        } catch (error) {
            console.log(error);
        }
    }

    // Filter Outputs
    const onFilterHandler = async (event) => {
        if (oldDbData.length === 0) {
            return;
        }
        const newArray = oldDbData.filter(SingleObject => {
            return SingleObject[1].includes(event.target.value);
        });
        setDbData(newArray);
    }

    // create and download excel file 
    const createExcelFile = () => {

    }

    // create and download pdf file
    const CreatePDFHandler = () => {
        CreatePDF({
            headers: tableHeaders,
            body: dbData
        })
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
                        filter={onFilterHandler}
                        createExcelFile={createExcelFile}
                        createPdfFile={CreatePDFHandler}
                    />
                </React.Fragment> : null
            }
        </React.Fragment>
    );
};



export default ManageSubjects;