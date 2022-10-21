import React from "react";
import { GrEdit } from "react-icons/gr";
import { FiSearch } from "react-icons/fi";
import "./Table.css";



const Table = props => {
    return (
        <React.Fragment>
            <div className="Timetable__Header DisplayFlex">
                <div className="DisplayFlex">
                    <label>filter: </label>
                    <form className="DisplayFlex IconAndInput">
                        <input
                            type="text"
                            placeholder="Filter TIme Table"
                            name="filter"
                            onChange={props.filter}
                        />
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
                        <button className="TimeTable__Button" onClick={props.createExcelFile}>Excel</button>
                        <button className="TimeTable__Button">pdf</button>
                    </div>
                </div>
            </div>
            <hr />

            {
                <table>
                    <thead>
                        <tr>
                            {
                                props.tableHeaders.map(singleHeader => (
                                    <th key={singleHeader}>{singleHeader}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.tableBody.map(singleTimeTable => {
                                return (
                                    <React.Fragment key={singleTimeTable[1]}>
                                        <tr>
                                            <td colSpan={props.tableHeaders.length}>
                                                <hr />
                                            </td>
                                        </tr>
                                        <tr>
                                            {
                                                singleTimeTable.map(property => {
                                                    if (property.toString().includes("backend")) {
                                                        return (
                                                            <td key={property} className="Table__Image">
                                                                <img
                                                                    alt=""
                                                                    src={`http://localhost:8080/${property}`}
                                                                />
                                                            </td>
                                                        );
                                                    } else {
                                                        return (
                                                            <td key={property}>{property}</td>
                                                        )
                                                    }
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
            }
        </React.Fragment>
    );
};


export default Table;