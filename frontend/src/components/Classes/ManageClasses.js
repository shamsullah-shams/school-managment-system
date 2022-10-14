import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "../UI/Table/Table";




const ManageClasses = props => {
    const [dbData, setDbData] = useState([]);
    // Get Data from backend when the component loads
    const tableHeaders = ["S/N", "Name", "Class Type", "Edit"];
    useEffect(() => {
        const getDbData = async () => {
            try {
                const result = await axios.get("http://localhost:8080/api/admin/classes/getAll");
                let counter = 0;
                const newArray = result.data.map(SingleObject => {
                    counter++;
                    return [
                        counter,
                        SingleObject.className,
                        SingleObject.classType
                    ]
                });

                setDbData(newArray);
            } catch (error) {
                console.log(error);
            }
        }

        getDbData();
    }, []);
    return (
        <React.Fragment>
            <Table
                tableHeaders={tableHeaders}
                tableBody={dbData}
            />

        </React.Fragment>
    );
};



export default ManageClasses;