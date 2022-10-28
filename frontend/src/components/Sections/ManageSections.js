import axios from "axios";
import React, { useState } from "react";
import Buttons from "../UI/Button/Buttons";
import Form from "../UI/Form/Form";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import Row from "../UI/Row/Row";
import Table from "../UI/Table/Table";
import { useSelector } from "react-redux";
import CreatePDF from "../CretaPDF/CreatePDF";
import { AnimatePresence } from "framer-motion";
import Model from "../UI/Model/Model";
import { ToastContainer, toast } from "react-toastify";



// to store clicked item id
let selectedItemId;


const ManageSections = props => {
    const [dbData, setDbData] = useState([]);
    const [oldDbData, setOldDbData] = useState([]);
    const [showDbData, setShowDbData] = useState(false);
    const [selectedClass, setSelectedClass] = useState("");
    const tableHeaders = ["S/N", "Name", "Class Name", "Teacher"];
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
            await axios.get(`http://localhost:8080/api/admin/sections/delete/${selectedItemId}`);
            onSubmitHandler();
            toast.success("Time Table is Deleted");
        } catch (error) {
            toast.error(error.message);
        }
    }








    // @@ fetch classes from Redux
    const classes = useSelector(state => state.loadTeachers.Classes);

    // @@ handling input changes
    const onChangeHandler = event => {
        setSelectedClass(event.target.value);
    }

    // @@ handling form submission
    const onSubmitHandler = async (event) => {
        if (event) {
            event.preventDefault();
        }
        try {
            const result = await axios.get(`http://localhost:8080/api/admin/sections/${selectedClass}`);
            const newArray = result.data.map(SingleObject => {
                return [
                    SingleObject.id,
                    SingleObject.name,
                    SingleObject.className,
                    SingleObject.teacher,
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
                            message="Section"
                        />
                    )
                }
            </AnimatePresence>
            {/* Showing Toast Notification */}
            <ToastContainer
                autoClose={5000}
                toastStyle={{ background: "rgb(43, 42, 42)", color: "#fff" }}
            />
            <Form className="Left" onSubmit={onSubmitHandler}>
                <Row>
                    <SelectElement
                        onChange={onChangeHandler}
                        label="Class"
                        options={classes}
                        value={selectedClass}
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
                        showModel={showModelHandler}
                    />
                </React.Fragment> : null
            }
        </React.Fragment>
    );
};



export default ManageSections;