import React from "react";
import Aside from "../../components/aside/Aside";
import Header from "../../components/header/Header";
import Main from "../../components/main/Main";
import "./Dashboard.css";


const Dashboard = props => {
    return (
        <React.Fragment>
            <Header />
            <div className="SideBySide">
                <Aside />
                <Main />
            </div>
        </React.Fragment>
    );
};



export default Dashboard;