import axios from "../../api/axios";
import React, { useState } from "react";
import Buttons from "../UI/Button/Buttons";
import Form from "../UI/Form/Form";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import Row from "../UI/Row/Row";
import { useSelector } from "react-redux";
import Table from "../UI/Table/Table";
import CreatePDF from "../CretaPDF/CreatePDF";
import { AnimatePresence } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import Model from "../UI/Model/Model";

// to store clicked item id
let selectedItemId;


const StudentInfo = props => {
    const [selectedClass, setSelectedClass] = useState("");
    const [dbData, setDbData] = useState([]);
    const [oldDbData, setOldDbData] = useState([]);
    const [showDbData, setShowDbData] = useState(false);
    const tableHeaders = ["S/N", "Photo", "Name", "Addmission No", "Section", "Email"];
    const [showModel, setShowModel] = useState(false);
    // show model
    const showModelHandler = (id) => {
        selectedItemId = id;
        setShowModel(true);
    }

    // when user press the cancel button we hide the model
    const onCancelHandler = () => {
        setShowModel(false);
    }

    // when user press confirm button we delete the data and hide the model
    const onDeleteHandler = async () => {
        setShowModel(false);

        try {
            await axios.get(`/api/admin/students/delete/${selectedItemId}`);
            toast.success("Student is Deleted");
            onSubmitHandler();
        } catch (error) {
            toast.error(error.message);
        }
    }







    // Fetch Classes from Redux
    const classes = useSelector(state => state.loadTeachers.Classes);

    // onChange Function
    const onChangeHandler = event => {
        setSelectedClass(event.target.value);
    }

    // onChange Submit Function
    const onSubmitHandler = async (event) => {
        if (event) {
            event.preventDefault(event);
        }
        try {
            const result = await axios.get(`/api/admin/students/${selectedClass}`);
            const newArray = result.data.map(singleStudent => {
                return [
                    singleStudent.id,
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
            toast.error(error.message);
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

    // create and download excel file
    const createExcelFile = () => {

    }

    // create and download pdf file
    const CreatePDFHandler = () => {
        CreatePDF({
            headers: tableHeaders,
            body: dbData,
        })
    }

    return (
        <React.Fragment>
            {/* Showing Model Conditionally */}
            <AnimatePresence onExitComplete={onCancelHandler}>
                {
                    showModel && (
                        <Model
                            onExitComplete={onCancelHandler}
                            confirm={onDeleteHandler}
                            message="Student"
                        />
                    )
                }
            </AnimatePresence>
            {/* Showing Toast Notification */}
            <ToastContainer
                autoClose={5000}
            />
            <Form onSubmit={onSubmitHandler} className="Left">
                <Row>
                    <SelectElement
                        label="Class"
                        options={classes}
                        onChange={onChangeHandler}
                        value={selectedClass}
                    />
                </Row>
                <Buttons title="Submit" />
            </Form>

            {
                showDbData ? <React.Fragment>
                    <Table
                        tableHeaders={tableHeaders}
                        tableBody={dbData}
                        filter={onFilterHandler}
                        createExcelFile={createExcelFile}
                        createPdfFile={CreatePDFHandler}
                        showModel={showModelHandler}
                    />
                </React.Fragment> : null
            }

        </React.Fragment>
    );
};



export default StudentInfo;