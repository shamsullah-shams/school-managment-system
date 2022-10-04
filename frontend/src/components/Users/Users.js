import React, { useState } from "react";
import Card from "../UI/Card/Card";
import Form from "../UI/Form/Form";
import InputElement from "../UI/Form/FormElement/InputElement";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import Row from "../UI/Row/Row";
import Buttons from "../UI/Button/Buttons";
import "../Root.css";



const CreateUser = props => {
    return (
        <Form>
            <Row>
                <SelectElement label="User Type" options={["Accountant", "Parent", "Teacher"]} />
                <InputElement placeholder="Full Name" label="Full Name" />
                <InputElement placeholder="Address" label="Address" />
            </Row>
            <Row>
                <InputElement placeholder="Email Address" label="Email Address" />
                <InputElement placeholder="User Name" label="User Name" />
                <InputElement placeholder="Phone" type="tel" label="Phone" />
                <InputElement placeholder="Telephone" type="tel" label="TelePhone" />
            </Row>
            <Row>
                <InputElement placeholder="Date of Student" type="date" label="Date Of Student" />
                <InputElement placeholder="password" type="password" label="Password" />
                <SelectElement label="Gender" options={["Male", "Female"]} />
                <SelectElement label="Nationality" options={["Afghan", "Indian", "American"]} />
            </Row>
            <Row>
                <SelectElement label="State" options={["Kdr", "Kbl", "Hrt"]} />
                <InputElement label="LGA" placeholder="LGA" />
                <SelectElement label="Blood Group" options={["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]} />
            </Row>
            <Row>
                <InputElement label="profile picture" type="file" />
                <Buttons
                    previos={{ title: "Previos" }}
                    next={{ title: "Next" }}
                />
            </Row>
        </Form>
    );
}



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
        <main className="Main">
            <Card card title="Manage Users">
                <Row>
                    <div className="Buutons__Group">
                        <button className={createUser ? "active__button" : ""} onClick={createUserHandler}>Create User</button>
                        <button className={manageUsers ? "active__button" : ""} onClick={manageUsersHandler}>Manage Users</button>
                    </div>
                </Row>
                {
                    createUser ? <CreateUser /> : null
                }

            </Card>
        </main>
    );
};



export default Users;