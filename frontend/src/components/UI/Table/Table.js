import React, { useState } from "react";
import { GrEdit, } from "react-icons/gr";
import { FiSearch, FiEye, FiTrash2, } from "react-icons/fi";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";

import "./Table.css";



const CreateTable = props => {

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
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            {
                                props.tableHeaders.map(singleHeader => (
                                    <TableCell key={singleHeader}>{singleHeader}</TableCell>
                                ))
                            }
                            <TableCell>Actions</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            props.tableBody.map(SingleObject => {
                                return (

                                    <TableRow key={SingleObject[0]}>
                                        {
                                            SingleObject.map(SingleProperty => {
                                                if (SingleProperty.toString().includes("backend")) {
                                                    return (
                                                        <TableCell key={SingleProperty} className="Table__Image">
                                                            <img
                                                                alt=""
                                                                src={`http://localhost:8080/${SingleProperty}`}
                                                            />
                                                        </TableCell>
                                                    );
                                                } else {
                                                    return (
                                                        <TableCell key={SingleProperty}>{SingleProperty}</TableCell>
                                                    )
                                                }
                                            })
                                        }
                                        <TableCell>
                                            <GrEdit />
                                            <FiEye />
                                            <FiTrash2 onClick={() => { props.showModel(SingleObject[0]) }} />
                                        </TableCell>
                                    </TableRow>
                                )
                            })
                        }
                    </TableBody>
                </Table>
            }
        </React.Fragment>
    );
};


export default CreateTable;