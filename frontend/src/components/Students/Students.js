import React, { useState } from "react";
import Row from "../UI/Row/Row";
import "../Root.css";
import AdmitStudent from "./AdmitStudent";
import StudentPromotion from "./StudentPromotion";
import StudentInfo from "./StudentInfo";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Title from "../UI/Title/Title";


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
        <Grid item xs={12}>
            <Paper sx={{ p: 5, display: 'flex', flexDirection: 'column' }}>
                <Title>Manage Students</Title>
                <main>
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
                </main>
            </Paper>
        </Grid>
    );
};



export default Students;