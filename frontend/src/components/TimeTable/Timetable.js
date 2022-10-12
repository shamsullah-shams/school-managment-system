import React, { useEffect, useState } from "react";
import Card from "../UI/Card/Card";
import Row from "../UI/Row/Row";
import "./Timetable.css";
import CreateTimeTable from "./CreateTimeTable";
import ManageTimeTables from "./ManageTimeTables";



const Timetable = props => {

    const [createTimeTable, setCreateTimeTable] = useState(true);
    const [manageTimeTables, setManageTimeTables] = useState(false);

    const createTimeTableHandler = () => {
        setCreateTimeTable(true);
        setManageTimeTables(false);
    }

    const manageTimeTablesHandler = () => {
        setCreateTimeTable(false);
        setManageTimeTables(true);
    }


    return (
        <main className="Main">
            <Card>Manage TimeTables</Card>
            <Card card title="Manage Timetables">
                <Row>
                    <div className="Buutons__Group">
                        <button className={createTimeTable ? "active__button" : ""} onClick={createTimeTableHandler}>Create Timetable</button>
                        <button className={manageTimeTables ? "active__button" : ""} onClick={manageTimeTablesHandler}>Manage Timetables</button>
                    </div>
                </Row>
                {
                    createTimeTable ? <CreateTimeTable /> : null
                }
                {
                    manageTimeTables ? <ManageTimeTables /> : null
                }
            </Card>
        </main>
    );
};





export default Timetable;