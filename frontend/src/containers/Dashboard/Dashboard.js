import React from "react";
import Aside from "../../components/UI/aside/Aside";
import Header from "../../components/UI/header/Header";
import Root from "../../components/Root/Root"
import Timetable from "../../components/TimeTable/Timetable";
import Users from "../../components/Users/Users";
import Students from "../../components/Students/Students";
import Sections from "../../components/Sections/Sections";
import Exams from "../../components/Exams/Exams";
import MyAccount from "../../components/MyAccount/MyAccount";
import Classes from "../../components/Classes/Classes";
import Subjects from "../../components/Subjects/Subjects";
import { useLocation } from "react-router-dom";
import "./Dashboard.css";
import Administrative from "../../components/Administrative/Administrative";


const Dashboard = props => {

    const location = useLocation();
    let pathName = location.pathname;
    let Component;

    if (pathName === "/") {
        Component = Root;
    } else if (pathName === "/academics") {
        Component = Timetable;
    } else if (pathName === "/users") {
        Component = Users;
    } else if (pathName === "/students") {
        console.log("students")
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
    } else if (pathName === "/administrative") {
        Component = Administrative;
    }

    return (
        <React.Fragment>
            <Header />
            <div className="SideBySide">
                <Aside />
                <Component />
            </div>
        </React.Fragment>
    );
};



export default Dashboard;