import React, { useState } from "react";
import "./Main.css";
import { useLocation } from "react-router-dom";
import Root from "../routes/Root";
import Timetable from "../routes/Timetable";
import Users from "../routes/Users";
import Students from "../routes/Students";
import Sections from "../routes/Sections";
import Exams from "../routes/Exams";
import MyAccount from "../routes/MyAccount";
import Classes from "../routes/Classes";
import Subjects from "../routes/Subjects";
import Administrative from "../routes/Administrative";
import Dormitories from "../routes/Dormitories";
import StudentInfo from "../routes/StudentInfo";
import GraduatedStu from "../routes/GraduatedStu";
import StudentPromotion from "../routes/StudentPromotion";
import Admitstudent from "../AdmitStudent/AdmitStudent";


const Main = props => {

    const location = useLocation();
    let pathName = location.pathname;
    let Component;

    if (pathName === "/") {
        Component = Root;
    } else if (pathName === "/timetable") {
        Component = Timetable;
    } else if (pathName === "/dormitories") {
        Component = Dormitories;
    } else if (pathName === "/users") {
        Component = Users;
    } else if (pathName === "/students") {
        Component = Students;
    } else if (pathName === "/sections") {
        Component = Sections
    } else if (pathName === "/exams") {
        Component = Exams
    } else if (pathName === "/myaccount") {
        Component = MyAccount;
    } else if (pathName === "/classes") {
        Component = Classes;
    } else if (pathName === "/subjects") {
        Component = Subjects;
    } else if (pathName === "/payments") {
        Component = Administrative;
    } else if (pathName === "/studentinfo") {
        Component = StudentInfo;
    } else if (pathName === "/graduatedstudents") {
        Component = GraduatedStu;
    } else if (pathName === "/studentpromotion") {
        Component = StudentPromotion;
    } else if (pathName === "/admitstudent") {
        Component = Admitstudent;
    }


    return (
        <React.Fragment>
            <Component />
        </React.Fragment>
    );
};



export default Main;