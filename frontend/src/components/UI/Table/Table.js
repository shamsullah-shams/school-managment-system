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
                            {
                                props.tableHeaders.map(singleHeader => (
                                    <th>{singleHeader}</th>
                                ))
                            }
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.tableBody.map(singleTimeTable => {
                                return (
                                    <React.Fragment>
                                        <tr ><td colSpan={props.tableHeaders.length}><hr /></td></tr>
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
                            })
                        }

                    </tbody>
                </table>
            }
        </React.Fragment>
    );
};


export default Table;