import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Row from "../UI/Row/Row";
import CreateSection from "./CreateSection";
import ManageSections from "./ManageSections";
import Title from "../UI/Title/Title";
import "../Root.css";




const Sections = props => {

    const [createSection, setCreateSection] = useState(true);
    const [manageSections, setManageSections] = useState(false);

    const createSectionHandler = () => {
        setCreateSection(true);
        setManageSections(false);
    }

    const manageSectionsHandler = () => {
        setCreateSection(false);
        setManageSections(true);
    }


    return (
        <Grid item xs={12}>
            <Paper sx={{ p: 5, display: 'flex', flexDirection: 'column' }}>
                <Title>Manage Sections</Title>
                <main>
                    <Row>
                        <div className="Buutons__Group">
                            <button className={createSection ? "active__button" : ""} onClick={createSectionHandler}>Create Section</button>
                            <button className={manageSections ? "active__button" : ""} onClick={manageSectionsHandler}>Manage Sections</button>
                        </div>
                    </Row>
                    {
                        createSection ? <CreateSection /> : null
                    }
                    {
                        manageSections ? <ManageSections /> : null
                    }
                </main>
            </Paper>
        </Grid>
    );
};



export default Sections;