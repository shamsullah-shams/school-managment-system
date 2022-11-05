import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Row from "../UI/Row/Row";
import AddSubject from "./AddSubject";
import ManageSubjects from "./ManageSubjects";
import Title from "../UI/Title/Title";



const Subjects = props => {

    const [addSubject, setAddSubject] = useState(true);
    const [manageSubjects, setManageSubjects] = useState(false);

    const addSubjectHandler = () => {
        setAddSubject(true);
        setManageSubjects(false);
    }

    const manageSubjectsHandler = () => {
        setAddSubject(false);
        setManageSubjects(true);
    }


    return (
        <Grid item xs={12}>
            <Paper sx={{ p: 5, display: 'flex', flexDirection: 'column' }}>
                <main >
                    <Title>Manage Subjects</Title>
                    <Row>
                        <div className="Buutons__Group">
                            <button className={addSubject ? "active__button" : ""} onClick={addSubjectHandler}>Add Subject</button>
                            <button className={manageSubjects ? "active__button" : ""} onClick={manageSubjectsHandler}>Manage Subjects</button>
                        </div>
                    </Row>
                    {
                        addSubject ? <AddSubject /> : null
                    }
                    {
                        manageSubjects ? <ManageSubjects /> : null
                    }

                </main>
            </Paper>
        </Grid>
    );
};



export default Subjects;