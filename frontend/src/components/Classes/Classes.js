import React, { useState } from "react";
import Row from "../UI/Row/Row";
import CreateClass from "./CreateClass";
import ManageClasses from "./ManageClasses";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Title from "../UI/Title/Title";
import "../Root.css"





const Classes = props => {

    const [createClass, setCreateClasses] = useState(true);
    const [manageClasses, setManageClasses] = useState(false);

    const createClassHandler = () => {
        setCreateClasses(true);
        setManageClasses(false);
    }

    const manageClassesHandler = () => {
        setCreateClasses(false);
        setManageClasses(true);
    }


    return (
        <Grid item xs={12}>
            <Paper sx={{ p: 5, display: 'flex', flexDirection: 'column' }}>
                <Title>Manage Classes</Title>
                <main className="Main">
                    <Row>
                        <div className="Buutons__Group">
                            <button className={createClass ? "active__button" : ""} onClick={createClassHandler}>Create Class</button>
                            <button className={manageClasses ? "active__button" : ""} onClick={manageClassesHandler}>Manage Class</button>
                        </div>
                    </Row>
                    {
                        createClass ? <CreateClass /> : null
                    }
                    {
                        manageClasses ? <ManageClasses /> : null
                    }
                </main>
            </Paper>
        </Grid>
    );
};



export default Classes;