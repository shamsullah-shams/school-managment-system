import React, { useState } from "react";
import Card from "../UI/Card/Card";
import Row from "../UI/Row/Row";
import ChangePassword from "./ChangePassword";
import ManageProfile from "./ManageProfile";



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
        <main className="Main">
            <Card card title="Manage Account">
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
            </Card>
        </main>
    );
};



export default MyAccount;