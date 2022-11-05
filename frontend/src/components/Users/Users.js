import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Row from "../UI/Row/Row";
import CreateUser from "./CreateUser";
import "../Root.css";
import ManageUsers from "./ManageUsers";
import Title from "../UI/Title/Title";




const Users = props => {

    const [createUser, setCreateUser] = useState(true);
    const [manageUsers, setManageUsers] = useState(false);

    const createUserHandler = () => {
        setCreateUser(true);
        setManageUsers(false);
    }

    const manageUsersHandler = () => {
        setCreateUser(false);
        setManageUsers(true);
    }


    return (
        <Grid item xs={12}>
            <Paper sx={{ p: 5, display: 'flex', flexDirection: 'column' }}>
                <Title>Manage Users</Title>
                <main >
                    <Row>
                        <div className="Buutons__Group">
                            <button className={createUser ? "active__button" : ""} onClick={createUserHandler}>Create User</button>
                            <button className={manageUsers ? "active__button" : ""} onClick={manageUsersHandler}>Manage Users</button>
                        </div>
                    </Row>
                    {
                        createUser ? <CreateUser /> : null
                    }
                    {
                        manageUsers ? <ManageUsers /> : null
                    }

                </main>
            </Paper>
        </Grid>
    );
};



export default Users;