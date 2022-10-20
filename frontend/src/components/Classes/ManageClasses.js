import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "../UI/Table/Table";




const ManageClasses = props => {
    const [dbData, setDbData] = useState([]);
    const [oldDbData, setOldDbData] = useState([]);


    const tableHeaders = ["S/N", "Name", "Class Type", "Edit"];
    // Get Data from backend when the component loads
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
                setOldDbData(newArray);
            } catch (error) {
                console.log(error);
            }
        }

        getDbData();
    }, []);

    // Filter Outputs
    const onFilterHandler = async (event) => {
        if (dbData.length === 0) {
            return;
        }
        const newArray = oldDbData.filter(SingleObject => {
            return SingleObject[1].includes(event.target.value);
        });
        setDbData(newArray);
    }


    return (
        <React.Fragment>
            <Table
                tableHeaders={tableHeaders}
                tableBody={dbData}
                filter={onFilterHandler}
            />
        </React.Fragment>
    );
};



export default ManageClasses;