import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "../UI/Table/Table";




const ManageTimeTables = props => {
    const [timeTable, setTimeTable] = useState([]);
    const [oldDbData, setOldDbData] = useState([]);
    const timeTableHeaders = ["S/N", "Name", "Class", "Type", "Year", "Edit"];

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

    return (
        <React.Fragment>
            <Table
                tableHeaders={timeTableHeaders}
                tableBody={timeTable}
                filter={onFilterHandler}
            />
        </React.Fragment>
    );
}



export default ManageTimeTables;