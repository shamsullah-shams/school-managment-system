import React, { useState } from "react";
import Card from "../UI/Card/Card";
import Form from "../UI/Form/Form";
import Row from "../UI/Row/Row";
import InputElement from "../UI/Form/FormElement/InputElement";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import Buttons from "../UI/Button/Buttons";
import "../Root.css";
import axios from "axios";



const AdmitStudent = props => {

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


    return (
        <Form onSubmit={onSubmitHandler}>
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
                <Buttons previos={{ title: "Previos" }} next={{ title: "Next" }} />
            </Row>
        </Form>
    );
};


const StudentPromotion = props => {
    return (
        <Form>
            <Row>
                <InputElement label="From Class" placeholder="From Class" />
                <InputElement label="From Section" placeholder="From Sections" />
                <InputElement label="To Class" placeholder="To Class" />
                <InputElement label="To Section" placeholder="To Section" />
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


const Students = props => {

    const [admitStudent, setAdmitStudent] = useState(true);
    const [studentInfo, setStudentInfo] = useState(false);
    const [studentPromotion, setStudentPromotion] = useState(false);
    const [graduatedStudents, setGratuadetStudents] = useState(false);

    const admitStudentHandler = () => {
        setAdmitStudent(true);
        setStudentInfo(false);
        setStudentPromotion(false);
        setGratuadetStudents(false);
    }

    const studentInfoHandler = () => {
        setAdmitStudent(false);
        setStudentInfo(true);
        setStudentPromotion(false);
        setGratuadetStudents(false)
    };


    const studentPromotionHandler = () => {
        setAdmitStudent(false);
        setStudentInfo(false);
        setStudentPromotion(true);
        setGratuadetStudents(false);
    }
    const graduatedStudentsHandler = () => {
        setAdmitStudent(false);
        setStudentInfo(false);
        setStudentPromotion(false);
        setGratuadetStudents(true);
    }



    return (
        <main className="Main">
            <Card card title="Manage Students" >
                <Row>
                    <div className="Buutons__Group">
                        <button className={admitStudent ? "active__button" : ""} onClick={admitStudentHandler}>Admit Student</button>
                        <button className={studentInfo ? "active__button" : ""} onClick={studentInfoHandler}>Student information</button>
                        <button className={studentPromotion ? "active__button" : ""} onClick={studentPromotionHandler}>Student Promotion</button>
                        <button className={graduatedStudents ? "active__button" : ""} onClick={graduatedStudentsHandler}>Graduated Student</button>
                    </div>
                </Row>
                {
                    admitStudent ? <AdmitStudent /> : null
                }
                {
                    studentPromotion ? <StudentPromotion /> : null
                }
            </Card>
        </main>
    );
};



export default Students;