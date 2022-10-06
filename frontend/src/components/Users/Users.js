import React, { useState } from "react";
import Card from "../UI/Card/Card";
import Form from "../UI/Form/Form";
import InputElement from "../UI/Form/FormElement/InputElement";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import Row from "../UI/Row/Row";
import Buttons from "../UI/Button/Buttons";
import axios from "axios";
import "../Root.css";
import { AiFillPrinter } from "react-icons/ai";



const CreateUser = props => {
    const [user, setUser] = useState({
        userType: "",
        fullName: "",
        address: "",
        email: "",
        userName: "",
        phone: "",
        dateOfBirth: "",
        password: "",
        gender: "",
        nationality: "",
        state: "",
        bloodGroup: "",
        image: "",
    })

    const onChangeHandler = event => {
        const { name, value } = event.target;
        if (name === "image") {
            return setUser(prevState => {
                return {
                    ...prevState,
                    image: event.target.files[0],
                }
            })
        }
        setUser(prevState => {
            return {
                ...prevState,
                [name]: value,
            }
        })
    }


    const onSubmitHandler = async (event) => {
        event.preventDefault(event);
        const formData = new FormData();
        formData.append("userType", user.userType);
        formData.append("fullName", user.fullName);
        formData.append("address", user.address);
        formData.append("email", user.email);
        formData.append("userName", user.userName);
        formData.append("phone", user.phone);
        formData.append("dateOfBirth", user.dateOfBirth);
        formData.append("password", user.password);
        formData.append("gender", user.gender);
        formData.append("nationality", user.nationality);
        formData.append("state", user.state);
        formData.append("bloodGroup", user.bloodGroup);
        formData.append("image", user.image);


        try {
            const result = await axios.post("http://localhost:8080/api/admin/users/ragister", formData);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Form onSubmit={onSubmitHandler}>
            <Row>
                <SelectElement
                    label="User Type"
                    options={["Accountant", "Parent", "Teacher"]}
                    onChange={onChangeHandler}
                    name="userType"
                    required
                />
                <InputElement
                    placeholder="Full Name"
                    label="Full Name"
                    onChange={onChangeHandler}
                    value={user.fullName}
                    name="fullName"
                    required
                />
                <InputElement
                    placeholder="Address"
                    label="Address"
                    onChange={onChangeHandler}
                    value={user.address}
                    name="address"
                    required
                />
            </Row>
            <Row>
                <InputElement
                    placeholder="Email Address"
                    label="Email Address"
                    onChange={onChangeHandler}
                    value={user.email}
                    name="email"
                    required
                />
                <InputElement
                    placeholder="User Name"
                    label="User Name"
                    onChange={onChangeHandler}
                    value={user.userName}
                    name="userName"
                    required
                />
                <InputElement
                    placeholder="Phone"
                    type="tel"
                    label="Phone"
                    onChange={onChangeHandler}
                    value={user.phone}
                    name="phone"
                    required
                />
            </Row>
            <Row>
                <InputElement
                    placeholder="Date of Student"
                    type="date"
                    label="Date Of Student"
                    onChange={onChangeHandler}
                    value={user.dateOfBirth}
                    name="dateOfBirth"
                    required
                />
                <InputElement
                    placeholder="password"
                    type="password"
                    label="Password"
                    onChange={onChangeHandler}
                    value={user.password}
                    name="password"
                    required
                />
                <SelectElement
                    label="Gender"
                    options={["Male", "Female"]}
                    onChange={onChangeHandler}
                    name="gender"
                    required
                />
            </Row>
            <Row>
                <SelectElement
                    label="Nationality"
                    options={["Afghan", "Indian", "American"]}
                    onChange={onChangeHandler}
                    name="nationality"
                    required
                />
                <SelectElement
                    label="State"
                    options={["Kdr", "Kbl", "Hrt"]}
                    onChange={onChangeHandler}
                    name="state"
                    required
                />
                <SelectElement
                    label="Blood Group"
                    options={["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]}
                    onChange={onChangeHandler}
                    name="bloodGroup"
                    required
                />
            </Row>
            <Row>
                <InputElement
                    label="profile picture"
                    type="file"
                    name="image"
                    onChange={onChangeHandler}
                    required
                />
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