import React, { useState } from "react";
import axios from "axios";
import Form from "../UI/Form/Form";
import Row from "../UI/Row/Row";
import InputElement from "../UI/Form/FormElement/InputElement";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import Buttons from "../UI/Button/Buttons";
import { useDispatch } from "react-redux";
import { loadTeacher } from "../../Redux/actions/Teacher";




const CreateUser = props => {
    const dispatch = useDispatch();
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

        for (let value in user) {
            // console.log(1);
            formData.append(value, user[value]);
        }


        try {
            const result = await axios.post("http://localhost:8080/api/admin/users/ragister", formData);
            dispatch(loadTeacher());
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
                <Buttons title="Submit" />
            </Row>
        </Form>
    );
}

export default CreateUser;