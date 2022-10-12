import React, { useState } from "react";
import axios from "axios";
import Form from "../UI/Form/Form";
import InputElement from "../UI/Form/FormElement/InputElement";
import SelectElement from "../UI/Form/FormElement/SelectElement";
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
                <Buttons title="Submit" />
            </Row>
        </Form>
    );
}


export default ChangePassword;