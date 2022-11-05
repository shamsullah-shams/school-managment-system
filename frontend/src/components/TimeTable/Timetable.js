import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Row from "../UI/Row/Row";
import "./Timetable.css";
import CreateTimeTable from "./CreateTimeTable";
import ManageTimeTables from "./ManageTimeTables";
import Title from "../UI/Title/Title";



const Timetable = () => {

    const [createTimeTable, setCreateTimeTable] = useState(true);
    const [manageTimeTables, setManageTimeTables] = useState(false);

    const createTimeTableHandler = () => {
        setCreateTimeTable(true);
        setManageTimeTables(false);
    }

    const manageTimeTablesHandler = () => {
        setCreateTimeTable(false);
        setManageTimeTables(true);
    }


    return (
        <Grid item xs={12}>
            <Paper sx={{ p: 5, display: 'flex', flexDirection: 'column' }}>
                <Title>Manage Timetable</Title>
                <main>
                    <Row>
                        <div className="Buutons__Group">
                            <button className={createTimeTable ? "active__button" : ""} onClick={createTimeTableHandler}>Create Timetable</button>
                            <button className={manageTimeTables ? "active__button" : ""} onClick={manageTimeTablesHandler}>Manage Timetables</button>
                        </div>
                    </Row>
                    {
                        createTimeTable ? <CreateTimeTable /> : null
                    }
                    {
                        manageTimeTables ? <ManageTimeTables /> : null
                    }
                </main>
            </Paper>
        </Grid>
    );
};





export default Timetable;