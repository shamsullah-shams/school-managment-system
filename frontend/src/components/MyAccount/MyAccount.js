import React, { useState } from "react";
import Card from "../UI/Card/Card";
import Form from "../UI/Form/Form";
import InputElement from "../UI/Form/FormElement/InputElement";
import Row from "../UI/Row/Row";
import Buttons from "../UI/Button/Buttons";



const ChangePassword = props => {
    const [newPassword, setNewPassword] = useState({
        currentPassword: "",
        replacePassword: "",
        confirmPassword: "",
    });

    console.log(props)

    const onChangeHandler = event => {
        const { name, value } = event.target;
        setNewPassword(prevState => {
            return {
                ...prevState,
                [name]: value,
            }
        })
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault(event);
        console.log(newPassword);
    }

    return (
        <Form className="Left" onSubmit={onSubmitHandler}>
            <Row>
                <InputElement
                    label="Current Password"
                    placeholder="Current Password"
                    type="password"
                    value={newPassword.currentPassword}
                    name="currentPassword"
                    onChange={onChangeHandler}
                />
            </Row>
            <Row>
                <InputElement
                    label="New Password"
                    placeholder="New Password"
                    type="password"
                    value={newPassword.replacePassword}
                    name="replacePassword"
                    onChange={onChangeHandler}
                />
            </Row>
            <Row>
                <InputElement
                    label="Corfirm Password"
                    placeholder="Confirm Password"
                    type="password"
                    name="confirmPassword"
                    value={newPassword.confirmPassword}
                    onChange={onChangeHandler}
                />
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