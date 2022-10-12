import React, { useState } from "react";
import Card from "../UI/Card/Card";
import Row from "../UI/Row/Row";
import CreateUser from "./CreateUser";
import "../Root.css";




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