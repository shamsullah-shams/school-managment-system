import React, { useState } from "react";
import axios from "axios";
import Form from "../UI/Form/Form";
import InputElement from "../UI/Form/FormElement/InputElement";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import Buttons from "../UI/Button/Buttons";
import Row from "../UI/Row/Row";




const CreateSection = props => {
    const [section, setSection] = useState({
        name: "",
        className: "",
        teacher: "",
    });

    const onChangeHandler = event => {
        const { name, value } = event.target;
        setSection(prevState => {
            return {
                ...prevState,
                [name]: value,
            }
        })
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault(event);
        try {
            const result = await axios.post("http://localhost:8080/api/admin/sections/create", {
                name: section.name,
                className: section.className,
                teacher: section.teacher,
            });

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
                    placeholder="Section Name"
                    value={section.name}
                    name="name"
                    onChange={onChangeHandler}
                />
            </Row>
            <Row>
                <SelectElement
                    label="Select Class"
                    options={["level 1", "level 2", "level 3"]}
                    name="className"
                    onChange={onChangeHandler}
                />
            </Row>
            <Row>
                <SelectElement
                    label="Teacher"
                    options={["shami", "faizi"]}
                    name="teacher"
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


export default CreateSection;