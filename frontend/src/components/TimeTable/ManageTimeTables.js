import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "../UI/Table/Table";
import CreatePDF from "../CretaPDF/CreatePDF";
import { AnimatePresence } from "framer-motion";
import Model from "../UI/Model/Model";
import { toast, ToastContainer } from "react-toastify";



// to store clicked item id
let selectedItemId;

const ManageTimeTables = props => {


    const [sendRequest, setSendRequest] = useState(false);
    const [timeTable, setTimeTable] = useState([]);
    const [oldDbData, setOldDbData] = useState([]);
    const timeTableHeaders = ["S/N", "Name", "Class", "Type", "Year"];
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
            await axios.get(`http://localhost:8080/api/admin/timetable/delete/${selectedItemId}`);
            setSendRequest(!sendRequest);
            toast.success("Time Table is Deleted");
        } catch (error) {
            toast.error(error.message);
        }
    }






    useEffect(() => {
        const getDbTimeTables = async () => {
            try {
                const data = await axios.get("http://localhost:8080/api/admin/timetable/getalltimetables");
                setTimeTable(data.data);
                setOldDbData(data.data);
            } catch (error) {
                toast.error(error.message);
            }
        };

        getDbTimeTables();
    }, [sendRequest]);


    // Filter Outputs
    const onFilterHandler = async (event) => {
        if (oldDbData.length === 0) {
            return;
        }
        const newArray = oldDbData.filter(SingleObject => {
            return SingleObject[1].includes(event.target.value);
        });
        setTimeTable(newArray);
    }

    // create and download excel file
    const createExcelFile = () => {

    }

    // create and download pdf file
    const CreatePDFHandler = () => {
        CreatePDF({
            headers: timeTableHeaders,
            body: timeTable
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
                            message="Time Table"

                        />
                    )
                }
            </AnimatePresence>
            {/* Showing Toast Notification */}
            <ToastContainer
                autoClose={5000}
                toastStyle={{ background: "rgb(43, 42, 42)", color: "#fff" }}
            />
            <Table
                tableHeaders={timeTableHeaders}
                tableBody={timeTable}
                filter={onFilterHandler}
                createExcelFile={createExcelFile}
                createPdfFile={CreatePDFHandler}
                showModel={showModelHandler}
            />
        </React.Fragment>
    );
}



export default ManageTimeTables;