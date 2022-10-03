import React, { useState } from "react";
import Card from "../Card/Card";
import Form from "../Form/Form";
import InputElement from "../Form/FormElement/InputElement";
import SelectElement from "../Form/FormElement/SelectElement";
import Row from "../UI/Row/Row";
import Buttons from "../UI/Button/Buttons";



const CreateTimeTable = props => {
    return (
        <Form className="Left">
            <Row>
                <InputElement
                    label="Name"
                    placeholder="Enter Name"
                />
            </Row>

            <Row>
                <SelectElement
                    label="Class"
                    options={["Nursery", "Level 1", "Level 2"]}
                />
            </Row>

            <Row>
                <SelectElement
                    label="Type"
                    options={["Class", "Exam"]}
                />
            </Row>
            <Row>
                <Buttons
                    previos={{ title: "Previos" }}
                    next={{ title: "Next" }}
                />
            </Row>

        </Form>
    );
}



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
                        <button className={createTimeTable ? "active" : ""} onClick={createTimeTableHandler}>Create Timetable</button>
                        <button className={manageTimeTables ? "active" : ""} onClick={manageTimeTablesHandler}>Manage Timetables</button>
                    </div>
                </Row>
                {
                    createTimeTable ? <CreateTimeTable /> : null
                }
            </Card>
        </main>
    );
};





export default Timetable;