import React, { useState } from "react";
import Card from "../UI/Card/Card";
import Row from "../UI/Row/Row";
import "../Root.css";
import AdmitStudent from "./AdmitStudent";
import StudentPromotion from "./StudentPromotion";
import StudentInfo from "./StudentInfo";


const Students = () => {

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
                {
                    studentInfo ? <StudentInfo /> : null
                }
            </Card>
        </main>
    );
};



export default Students;