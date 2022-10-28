import React, { useState } from "react";
import axios from "axios";
import Form from "../UI/Form/Form";
import Row from "../UI/Row/Row";
import InputElement from "../UI/Form/FormElement/InputElement";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import Buttons from "../UI/Button/Buttons";
import { useDispatch } from "react-redux";
import { loadTeacher } from "../../Redux/actions/Teacher";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';




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
            formData.append(value, user[value]);
        }


        try {
            const result = await axios.post("http://localhost:8080/api/admin/users/ragister", formData);
            if (result.status === 200) {
                // Clear Old Values
                let newObject = {};
                for (let i in user) {
                    newObject[i] = "";
                }
                setUser({ ...newObject });
                dispatch(loadTeacher());
                // show success toast message
                toast.success("User is Successfully added");
            }
        } catch (error) {
            toast.error(error.message);
        }
    }

    return (
        <React.Fragment>
            {/* Showing Toast Notification */}
            <ToastContainer
                autoClose={5000}
                toastStyle={{ background: "rgb(43, 42, 42)", color: "#fff" }}
            />
            <Form onSubmit={onSubmitHandler}>
                <Row>
                    <SelectElement
                        label="User Type"
                        options={["Accountant", "Parent", "Teacher"]}
                        value={user.userType}
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
                        value={user.gender}
                        onChange={onChangeHandler}
                        name="gender"
                        required
                    />
                </Row>
                <Row>
                    <SelectElement
                        label="Nationality"
                        options={["Afghan", "Indian", "American"]}
                        value={user.nationality}
                        onChange={onChangeHandler}
                        name="nationality"
                        required
                    />
                    <SelectElement
                        label="State"
                        options={["Kdr", "Kbl", "Hrt"]}
                        value={user.state}
                        onChange={onChangeHandler}
                        name="state"
                        required
                    />
                    <SelectElement
                        label="Blood Group"
                        options={["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]}
                        value={user.bloodGroup}
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
        </React.Fragment>
    );
}

export default CreateUser;