import React, { useState } from "react";
import Card from "../Card/Card";
import Form from "../Form/Form";
import Row from "../UI/Row/Row";
import InputElement from "../Form/FormElement/InputElement";
import SelectElement from "../Form/FormElement/SelectElement";
import Buttons from "../UI/Button/Buttons";



const AdmitStudent = props => {
    return (
        <Form>
            <Row>
                <InputElement label="Full Name" placeholder="Full Name" />
                <InputElement label="Address" placeholder="Address" />
            </Row>
            <Row>
                <InputElement label="Email Address" placeholder="Email Address" />
                <SelectElement label="Gender" options={["Male", "Female"]} />
                <InputElement label="Phone" placeholder="Phone" type="number" />
                <InputElement label="Telephone" placeholder="Telephone" type="number" />
            </Row>
            <Row>
                <InputElement label="Date Of Birth" placeholder="Date Of Birth" type="date" />
                <SelectElement label="Nationality" options={["Afghan", "Indian", "pakistani", "Americon"]} />
                <SelectElement label="State" options={["Amreica", "Asia", "Urop", "North America"]} />
                <SelectElement label="LGA" options={["some"]} />
            </Row>
            <Row>
                <SelectElement label="Blood Group" options={["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]} />
                <InputElement label="Choose Image" type="file" />
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
                        <button className={admitStudent ? "active" : ""} onClick={admitStudentHandler}>Admit Student</button>
                        <button className={studentInfo ? "active" : ""} onClick={studentInfoHandler}>Student information</button>
                        <button className={studentPromotion ? "active" : ""} onClick={studentPromotionHandler}>Student Promotion</button>
                        <button className={graduatedStudents ? "active" : ""} onClick={graduatedStudentsHandler}>Graduated Student</button>
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