import React, { useState } from "react";
import { GrEdit, } from "react-icons/gr";
import { FiSearch, FiEye, FiTrash2, } from "react-icons/fi";
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
                        <button
                            className="TimeTable__Button"
                        >
                            Copy
                        </button>
                        <button
                            className="TimeTable__Button"
                            onClick={props.createExcelFile}
                        >
                            Excel
                        </button>
                        <button
                            className="TimeTable__Button"
                            onClick={props.createPdfFile}
                        >
                            pdf
                        </button>
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
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.tableBody.map(SingleObject => {
                                return (
                                    <React.Fragment key={SingleObject[0]}>
                                        <tr>
                                            <td colSpan={props.tableHeaders.length + 1}>
                                                <hr />
                                            </td>
                                        </tr>
                                        <tr>
                                            {
                                                SingleObject.map(SingleProperty => {
                                                    if (SingleProperty.toString().includes("backend")) {
                                                        return (
                                                            <td key={SingleProperty} className="Table__Image">
                                                                <img
                                                                    alt=""
                                                                    src={`http://localhost:8080/${SingleProperty}`}
                                                                />
                                                            </td>
                                                        );
                                                    } else {
                                                        return (
                                                            <td key={SingleProperty}>{SingleProperty}</td>
                                                        )
                                                    }
                                                })
                                            }
                                            <td>
                                                <GrEdit />
                                                <FiEye />
                                                <FiTrash2 onClick={() => { props.showModel(SingleObject[0]) }} />
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