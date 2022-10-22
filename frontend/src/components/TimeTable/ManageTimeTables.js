import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "../UI/Table/Table";
import CreatePDF from "../CretaPDF/CreatePDF";




const ManageTimeTables = props => {
    const [timeTable, setTimeTable] = useState([]);
    const [oldDbData, setOldDbData] = useState([]);
    const timeTableHeaders = ["S/N", "Name", "Class", "Type", "Year"];

    useEffect(() => {
        const getDbTimeTables = async () => {
            try {
                const data = await axios.get("http://localhost:8080/api/admin/timetable/getalltimetables");
                setTimeTable(data.data);
                setOldDbData(data.data);
            } catch (error) {
                console.log(error);
            }
        };

        getDbTimeTables();
    }, []);


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
            <Table
                tableHeaders={timeTableHeaders}
                tableBody={timeTable}
                filter={onFilterHandler}
                createExcelFile={createExcelFile}
                createPdfFile={CreatePDFHandler}
            />
        </React.Fragment>
    );
}



export default ManageTimeTables;