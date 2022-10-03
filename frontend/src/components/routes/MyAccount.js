import React, { useState } from "react";
import Card from "../Card/Card";
import Form from "../Form/Form";
import InputElement from "../Form/FormElement/InputElement";
import Row from "../UI/Row/Row";
import Buttons from "../UI/Button/Buttons";



const ChangePassword = props => {
    return (
        <Form className="Left">
            <Row>
                <InputElement label="Current Password" placeholder="Current Password" type="password" />
            </Row>
            <Row>
                <InputElement label="New Password" placeholder="New Password" type="password" />
            </Row>
            <Row>
                <InputElement label="Corfirm Password" placeholder="Confirm Password" type="password" />
            </Row>
            <Row>
                <Buttons
                    previos={{ title: "Previos" }}
                    next={{ title: "Next" }}
                />
            </Row>
        </Form>
    );
}

const ManageProfile = props => {
    return (
        <Form className="Left">
            <Row>
                <InputElement label="Name" value="Shamsullah" disabled />
            </Row>
            <Row>
                <InputElement label="User Name" value="Admin" disabled />
            </Row>
            <Row>
                <InputElement label="E-mail" value="admin@admin.gmail.com" />
            </Row>
            <Row>
                <InputElement label="Phone" placeholder="Phone" type="tel" />
            </Row>
            <Row>
                <InputElement label="Address" placeholder="Address" />
            </Row>
            <Row>
                <Buttons
                    previos={{ title: "Previos" }}
                    next={{ title: "Next" }}
                />
            </Row>
        </Form>
    );
};




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
                        <button className={changePassword ? "active" : ""} onClick={changePasswordHandler}>Change Password</button>
                        <button className={manageAccount ? "active" : ""} onClick={manageAccountHandler}>Manage Profile</button>
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