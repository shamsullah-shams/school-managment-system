import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "../UI/Table/Table";




const ManageTimeTables = props => {
    const [timeTable, setTimeTable] = useState([]);
    const timeTableHeaders = ["S/N", "Name", "Class", "Type", "Year", "Edit"];

    useEffect(() => {
        const getDbTimeTables = async () => {
            try {
                const data = await axios.get("http://localhost:8080/api/admin/timetable/getalltimetables");
                setTimeTable(data.data);
            } catch (error) {
                console.log(error);
            }
        };

        getDbTimeTables();
    }, []);

    return (
        <React.Fragment>
            <Table
                tableHeaders={timeTableHeaders}
                tableBody={timeTable}
            />
        </React.Fragment>
    );
}



export default ManageTimeTables;