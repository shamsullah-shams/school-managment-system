import React, { useState } from "react";
import axios from "axios";
import Form from "../UI/Form/Form";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import Row from "../UI/Row/Row";
import Buttons from "../UI/Button/Buttons";
import Table from "../UI/Table/Table";
import CreateExcel from "../CreateExcel/CreateExcel";




const ManagePayments = () => {
    const [getYear, setGetYear] = useState("");
    const [dbData, setDbData] = useState([]);
    const [oldDbData, setOldDbData] = useState([]);
    const [showDbData, setShowDbData] = useState(false);
    const tableHeaders = ["S/N", "Title", "Class", "Amount", "Year", "Description", "Edit"];

    // Excel Data 
    const [excelData, setExcelData] = useState();

    // input Data handler
    const onChangeHandler = event => {
        setGetYear(event.target.value);
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault(event);
        try {
            const yearPayments = await axios.get(`http://localhost:8080/api/admin/payments/${getYear}`);
            setExcelData(yearPayments.data);
            setShowDbData(true);
            let counter = 0;
            const newArray = yearPayments.data.map(SO => {
                counter++;
                return [
                    counter,
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
            console.log(error);
        }
    }

    // Create and Download Excel File
    const createExcelFile = () => {
        CreateExcel(excelData);
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
                    />
                </React.Fragment> : null
            }
        </React.Fragment>
    );
}


export default ManagePayments;