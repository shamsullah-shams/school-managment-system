import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper"
import Row from "../UI/Row/Row";
import ChangePassword from "./ChangePassword";
import ManageProfile from "./ManageProfile";
import Title from "../UI/Title/Title";



const MyAccount = props => {

    const [changePassword, setChangePassword] = useState(true);
    const [manageAccount, setManageAccount] = useState(false);

    const changePasswordHandler = () => {
        setChangePassword(true);
        setManageAccount(false);
    }

    const manageAccountHandler = () => {
        setChangePassword(false);
        setManageAccount(true);
    }


    return (
        <Grid item xs={12}>
            <Paper sx={{ p: 5, display: 'flex', flexDirection: 'column' }}>
                <Title>Manage Account</Title>
                <main>
                    <Row>
                        <div className="Buutons__Group">
                            <button className={changePassword ? "active__button" : ""} onClick={changePasswordHandler}>Change Password</button>
                            <button className={manageAccount ? "active__button" : ""} onClick={manageAccountHandler}>Manage Profile</button>
                        </div>
                    </Row>
                    {
                        changePassword ? <ChangePassword /> : null
                    }
                    {
                        manageAccount ? <ManageProfile /> : null
                    }
                </main>
            </Paper>
        </Grid>

    );
};



export default MyAccount;