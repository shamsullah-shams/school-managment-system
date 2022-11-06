import React, { useEffect, useState } from "react";
import axios from "../../api/axios";
import Form from "../UI/Form/Form";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import Row from "../UI/Row/Row";
import Buttons from "../UI/Button/Buttons";
import Table from "../UI/Table/Table";
import CreatePDF from "../CretaPDF/CreatePDF";
import { toast, ToastContainer } from "react-toastify";
import { AnimatePresence } from "framer-motion";
import Model from "../UI/Model/Model";


// to store clicked item id
let selectedItemId;


const ManageUsers = () => {


    const [selectedType, setSelectedType] = useState("");
    const [dbData, setDbData] = useState([]);
    const [oldDbData, setOldDbData] = useState([]);
    const [showDbData, setShowDbData] = useState(false);
    const tableHeaders = ["S/N", "Photo", "Name", "User Name", "Email"]
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
            await axios.get(`/api/admin/users/delete/${selectedItemId}`);
            onSubmitHandler();
            toast.success("User is Deleted");
        } catch (error) {
            toast.error(error.message);
        }
    }





    useEffect(() => {

    }, [dbData]);

    const onChangeHandler = event => {
        setSelectedType(event.target.value);
    }

    const onSubmitHandler = async (event) => {
        if (event) {
            event.preventDefault(event);
        }
        try {
            const result = await axios.get(`/api/admin/users/${selectedType}`);

            const newArray = result.data.map(SingleObject => {
                return [
                    SingleObject.id,
                    SingleObject.imageUrl,
                    SingleObject.fullName,
                    SingleObject.userName,
                    SingleObject.email,
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
                            message="User"

                        />
                    )
                }
            </AnimatePresence>
            {/* Showing Toast Notification */}
            <ToastContainer
                autoClose={5000}
            />
            <Form className="Left" onSubmit={onSubmitHandler}>
                <Row>
                    <SelectElement
                        label="User Type"
                        options={["Teacher", "Accountant", "Parent"]}
                        value={selectedType}
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
                        showModel={showModelHandler}
                    />
                </React.Fragment> : null
            }
        </React.Fragment>
    );
}


export default ManageUsers;