import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "../UI/Table/Table";
import CreatePDF from "../CretaPDF/CreatePDF";
import { AnimatePresence } from "framer-motion";
import Model from "../UI/Model/Model";
import { toast, ToastContainer } from "react-toastify";




// to store clicked item id
let selectedItemId;



const ManageClasses = props => {


    const [dbData, setDbData] = useState([]);
    const [oldDbData, setOldDbData] = useState([]);
    const [sendRequest, setSendRequest] = useState(false);
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
            await axios.get(`http://localhost:8080/api/admin/classes/delete/${selectedItemId}`);
            setSendRequest(!sendRequest);
            toast.success("Time Table is Deleted");
        } catch (error) {
            toast.error(error.message);
        }
    }






    const tableHeaders = ["S/N", "Name", "Class Type"];
    // Get Data from backend when the component loads
    useEffect(() => {
        const getDbData = async () => {
            try {
                const result = await axios.get("http://localhost:8080/api/admin/classes/getAll");
                const newArray = result.data.map(SingleObject => {
                    return [
                        SingleObject.id,
                        SingleObject.className,
                        SingleObject.classType
                    ]
                });

                setDbData(newArray);
                setOldDbData(newArray);
            } catch (error) {
                toast.error(error.message);
            }
        }

        getDbData();
    }, [sendRequest]);

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

    // create and download pdf
    const CreatePDFHandler = () => {
        CreatePDF({
            headers: tableHeaders,
            body: dbData
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
                            message="Class"

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
                tableHeaders={tableHeaders}
                tableBody={dbData}
                filter={onFilterHandler}
                createExcelFile={createExcelFile}
                createPdfFile={CreatePDFHandler}
                showModel={showModelHandler}
            />
        </React.Fragment>
    );
};



export default ManageClasses;