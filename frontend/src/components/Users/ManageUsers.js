import React, { useEffect, useState } from "react";
import axios from "axios";
import Form from "../UI/Form/Form";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import Row from "../UI/Row/Row";
import Buttons from "../UI/Button/Buttons";
import Table from "../UI/Table/Table";
import CreatePDF from "../CretaPDF/CreatePDF";


const ManageUsers = () => {
    const [selectedType, setSelectedType] = useState("");
    const [dbData, setDbData] = useState([]);
    const [oldDbData, setOldDbData] = useState([]);
    const [showDbData, setShowDbData] = useState(false);
    const tableHeaders = ["S/N", "Photo", "Name", "User Name", "Email"]

    useEffect(() => {

    }, [dbData]);

    const onChangeHandler = event => {
        setSelectedType(event.target.value);
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault(event);
        try {
            const result = await axios.get(`http://localhost:8080/api/admin/users/${selectedType}`);
            let counter = 0;
            const newArray = result.data.map(SingleObject => {
                counter++;
                return [
                    counter,
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
            console.log(error);
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
            <Form className="Left" onSubmit={onSubmitHandler}>
                <Row>
                    <SelectElement
                        label="User Type"
                        options={["Teacher", "Accountant", "Parent"]}
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
}


export default ManageUsers;