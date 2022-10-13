import React, { useState } from "react";
import axios from "axios";
import Row from "../UI/Row/Row";
import Form from "../UI/Form/Form";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import InputElement from "../UI/Form/FormElement/InputElement";
import Buttons from "../UI/Button/Buttons";



const AdmitStudent = props => {

    const [nextForm, setNextForm] = useState(false);

    const [student, setStudent] = useState({
        fullName: "",
        address: "",
        email: "",
        gender: "",
        phone: "",
        dateOfBirth: "",
        nationality: "",
        state: "",
        bloodGroup: "",
        image: "",
    });

    const onChangeHandler = event => {

        const { name, value } = event.target;
        if (name === "image") {
            return setStudent(prevState => {
                return {
                    ...prevState,
                    image: event.target.files[0],
                }
            })
        }
        setStudent(previosState => {
            return {
                ...previosState,
                [name]: value,
            }
        });
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault(event);

        const formData = new FormData();
        formData.append("fullName", student.fullName);
        formData.append("address", student.address);
        formData.append("email", student.email);
        formData.append("gender", student.gender);
        formData.append("phone", student.phone);
        formData.append("dateOfBirth", student.dateOfBirth);
        formData.append("nationality", student.nationality);
        formData.append("state", student.state);
        formData.append("bloodGroup", student.bloodGroup);
        formData.append("image", student.image);



        try {
            const result = await axios.post("http://localhost:8080/api/admin/student/ragister", formData);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    let FirstFormData, SecondFormData;

    if (nextForm) {

    } else {
        Component = Component = <Form onSubmit={onSubmitHandler}>
            <Row>
                <InputElement
                    label="Full Name"
                    placeholder="Full Name"
                    name="fullName"
                    value={student.fullName}
                    onChange={onChangeHandler}
                />
                <InputElement
                    label="Address"
                    placeholder="Address"
                    name="address"
                    value={student.address}
                    onChange={onChangeHandler}
                />
            </Row>
            <Row>
                <InputElement
                    label="Email Address"
                    placeholder="Email Address"
                    name="email"
                    value={student.email}
                    onChange={onChangeHandler}
                />
                <SelectElement
                    label="Gender"
                    options={["Male", "Female"]}
                    name="gender"
                    onChange={onChangeHandler}
                />
                <InputElement
                    label="Phone"
                    placeholder="Phone"
                    type="tele"
                    name="phone"
                    value={student.phone}
                    onChange={onChangeHandler}
                />
            </Row>
            <Row>
                <InputElement
                    label="Date Of Birth"
                    placeholder="Date Of Birth"
                    type="date"
                    name="dateOfBirth"
                    value={student.dateOfBirth}
                    onChange={onChangeHandler}
                />
                <SelectElement
                    label="Nationality"
                    options={["Afghan", "Indian", "pakistani", "Americon"]}
                    name="nationality"
                    onChange={onChangeHandler}
                />
                <SelectElement
                    label="State"
                    options={["Amreica", "Asia", "Urop", "North America"]}
                    name="state"
                    onChange={onChangeHandler}
                />
            </Row>
            <Row>
                <SelectElement
                    label="Blood Group"
                    options={["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]}
                    name="bloodGroup"
                    onChange={onChangeHandler}
                />
                <InputElement
                    label="Choose Image"
                    type="file"
                    name="image"
                    onChange={onChangeHandler}
                />
            </Row>
            <Row>
                <Buttons title="Next" />
            </Row>
        </Form>
    }



    return (
        <React.Fragment>
            {
                Component
            }
        </React.Fragment>
    );
};



export default AdmitStudent;