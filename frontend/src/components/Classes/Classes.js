import React, { useState } from "react";
import Card from "../UI/Card/Card";
import Form from "../UI/Form/Form";
import InputElement from "../UI/Form/FormElement/InputElement";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import Row from "../UI/Row/Row";
import Buttons from "../UI/Button/Buttons";
import axios from "axios";
import "../Administrative.css";



const CreateClass = props => {

    const [newClass, setNewClass] = useState({
        name: "",
        type: "",
    });

    const onChangeHandler = event => {
        const { name, value } = event.target;
        setNewClass(prevState => {
            return {
                ...prevState,
                [name]: value,
            }
        })
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault(event);
        try {
            const result = await axios.post("http://localhost:8080/api/admin/classes/create", {
                newClass: newClass,
            })
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <Form className="Left" onSubmit={onSubmitHandler} >
            <Row>
                <InputElement
                    label="Class Name"
                    placeholder="Class Name"
                    name="name"
                    value={newClass.name}
                    onChange={onChangeHandler}
                />
            </Row>
            <Row>
                <SelectElement
                    label="Class Type"
                    options={["Primary", "Secondary", "Nurssry", "intermediat"]}
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



const Classes = props => {

    const [createClass, setCreateClasses] = useState(true);
    const [manageClasses, setManageClasses] = useState(false);

    const createClassHandler = () => {
        setCreateClasses(true);
        setManageClasses(false);
    }

    const manageClassesHandler = () => {
        setCreateClasses(false);
        setManageClasses(true);
    }


    return (
        <main className="Main">
            <Card card title="Manage Classes">
                <Row>
                    <div className="Buutons__Group">
                        <button className={createClass ? "active__button" : ""} onClick={createClassHandler}>Create Class</button>
                        <button className={manageClasses ? "active__button" : ""} onClick={manageClassesHandler}>Manage Class</button>
                    </div>
                </Row>
                {
                    createClass ? <CreateClass /> : null
                }

            </Card>
        </main>
    );
};



export default Classes;