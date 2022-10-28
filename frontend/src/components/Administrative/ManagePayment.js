import React, { useState } from "react";
import axios from "axios";
import Form from "../UI/Form/Form";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import Row from "../UI/Row/Row";
import Buttons from "../UI/Button/Buttons";
import Table from "../UI/Table/Table";
import CreateExcel from "../CreateExcel/CreateExcel";
import CreatePDF from "../CretaPDF/CreatePDF";
import { AnimatePresence } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import Model from "../UI/Model/Model";


// to store clicked item id
let selectedItemId;


const ManagePayments = () => {

    const [getYear, setGetYear] = useState("");
    const [dbData, setDbData] = useState([]);
    const [oldDbData, setOldDbData] = useState([]);
    const [showDbData, setShowDbData] = useState(false);
    const tableHeaders = ["S/N", "Title", "Class", "Amount", "Year", "Description"];
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
            await axios.get(`http://localhost:8080/api/admin/payment/delete/${selectedItemId}`);
            toast.success("Payment is Deleted");
            onSubmitHandler();
        } catch (error) {
            toast.error(error.message);
        }
    }






    // Excel Data 
    const [excelData, setExcelData] = useState();

    // input Data handler
    const onChangeHandler = event => {
        setGetYear(event.target.value);
    }

    const onSubmitHandler = async (event) => {
        if (event) {
            event.preventDefault(event);
        }
        try {
            const yearPayments = await axios.get(`http://localhost:8080/api/admin/payments/${getYear}`);
            setExcelData(yearPayments.data);
            setShowDbData(true);
            const newArray = yearPayments.data.map(SO => {
                return [
                    SO.id,
                    SO.title,
                    SO.className,
                    SO.amount,
                    SO.year,
                    SO.description
                ]
            });
            setDbData(newArray);
            setOldDbData(newArray);
        } catch (error) {
            toast.error(error.message);
        }
    }

    // Create and Download Excel File
    const createExcelFile = () => {
        CreateExcel(excelData);
    }

    // Create and Download PDF
    const CreatePDFHandler = () => {
        CreatePDF({
            headers: tableHeaders,
            body: dbData,
        });
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

    let year = new Date().toISOString().split("-")[0];
    const yearArray = [year, --year, --year, --year, --year, --year];

    return (
        <React.Fragment>
            {/* Showing Model Conditionally */}
            <AnimatePresence onExitComplete={onCancelHandler}>
                {
                    showModel && (
                        <Model
                            onExitComplete={onCancelHandler}
                            confirm={onDeleteHandler}
                            message="Payment"
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
                    <SelectElement onChange={onChangeHandler} label="Year" options={yearArray} />
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
}


export default ManagePayments;