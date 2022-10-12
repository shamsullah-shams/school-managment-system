import React, { useState, useEffect } from "react";
import axios from "axios";
import { GrEdit } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";




const ManageTimeTables = props => {
    const [timeTable, setTimeTable] = useState([]);
    const [tableBody, setTableBody] = useState(false);

    useEffect(() => {
        const getDbTimeTables = async () => {
            try {
                const data = await axios.get("http://localhost:8080/api/admin/timetable/getalltimetables");
                setTimeTable(data.data);
                console.log(data.data);
                setTableBody(true);
            } catch (error) {
                console.log(error);
            }
        };

        getDbTimeTables();
    }, []);

    return (
        <React.Fragment>
            <div className="Timetable__Header DisplayFlex">
                <div className="DisplayFlex">
                    <label>filter: </label>
                    <form className="DisplayFlex IconAndInput">
                        <input type="text" placeholder="Filter TIme Table" />
                        <FiSearch />
                    </form>
                </div>
                <div className="TimeTable__Button__div DisplayFlex">
                    <div>
                        <label>Show : </label>
                        <select className="Select__Button">
                            <option>10</option>
                            <option>25</option>
                            <option>100</option>
                        </select>
                    </div>
                    <div>
                        <button className="TimeTable__Button">Copy</button>
                        <button className="TimeTable__Button">Excel</button>
                        <button className="TimeTable__Button">pdf</button>
                    </div>
                </div>
            </div>
            <hr />

            {
                <table>
                    <thead>
                        <tr>
                            <th>id </th>
                            <th>Name </th>
                            <th>Class </th>
                            <th>Type</th>
                            <th>Year</th>
                            <th>Actions</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            tableBody ? timeTable.map(singleTimeTable => {
                                return (
                                    <React.Fragment>
                                        <tr ><td colSpan="6"><hr /></td></tr>
                                        <tr key={singleTimeTable[0]}>
                                            {
                                                singleTimeTable.map(property => {
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
                            }) : null
                        }

                    </tbody>
                </table>
            }
        </React.Fragment>
    );
}



export default ManageTimeTables;