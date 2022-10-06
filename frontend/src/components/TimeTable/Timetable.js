import React, { useState } from "react";
import Card from "../UI/Card/Card";
import Form from "../UI/Form/Form";
import InputElement from "../UI/Form/FormElement/InputElement";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import Row from "../UI/Row/Row";
import Buttons from "../UI/Button/Buttons";
import axios from "axios";


const CreateTimeTable = props => {
    const [timeTable, setTimeTable] = useState({
        name: "",
        className: "",
        type: ""
    });

    const onChangeHandler = event => {
        const { name, value } = event.target;
        setTimeTable(prevState => {
            return {
                ...prevState,
                [name]: value,
            }
        })
    };


    const onSubmitHandler = async (event) => {
        event.preventDefault(event);
        try {
            const result = await axios.post("http://localhost:8080/api/admin/timetable/create", {
                timeTable: timeTable,
            })
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }



    return (
        <Form className="Left" onSubmit={onSubmitHandler}>
            <Row>
                <InputElement
                    label="Name"
                    placeholder="Enter Name"
                    value={timeTable.name}
                    name="name"
                    onChange={onChangeHandler}
                />
            </Row>

            <Row>
                <SelectElement
                    label="Class"
                    options={["Nursery", "Level 1", "Level 2"]}
                    name="className"
                    onChange={onChangeHandler}
                />
            </Row>

            <Row>
                <SelectElement
                    label="Type"
                    options={["Class", "Exam"]}
                    name="type"
                    onChange={onChangeHandler}
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
                        <button className={createTimeTable ? "active__button" : ""} onClick={createTimeTableHandler}>Create Timetable</button>
                        <button className={manageTimeTables ? "active__button" : ""} onClick={manageTimeTablesHandler}>Manage Timetables</button>
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