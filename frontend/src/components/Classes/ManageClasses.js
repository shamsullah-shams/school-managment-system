import axios from "axios";
import React, { useEffect, useState } from "react";
import { GrEdit } from "react-icons/gr";




const ManageClasses = props => {
    const [dbData, setDbData] = useState([]);
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
            } catch (error) {
                console.log(error);
            }
        }

        getDbData();
    }, []);
    return (
        <React.Fragment>
            {
                <React.Fragment>
                    <hr />
                    <table>
                        <thead>
                            <tr>
                                <th>S/N</th>
                                <th>Name</th>
                                <th>Class Type</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                dbData.map(SinglePayment => {
                                    return (
                                        <React.Fragment>
                                            <tr>
                                                <td colSpan="4">
                                                    <hr />
                                                </td>
                                            </tr>
                                            <tr key={SinglePayment[0]}>
                                                {
                                                    SinglePayment.map(property => {
                                                        return (
                                                            <td key={property}>{property}</td>
                                                        )
                                                    })
                                                }
                                                <td>
                                                    <GrEdit />
                                                </td>
                                            </tr>
                                        </React.Fragment>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </React.Fragment>
            }
        </React.Fragment>
    );
};



export default ManageClasses;