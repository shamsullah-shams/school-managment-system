import React, { useState } from "react";
import Form from "../UI/Form/Form";
import Row from "../UI/Row/Row";
import axios from "axios";
import Buttons from "../UI/Button/Buttons";
import SelectElement from "../UI/Form/FormElement/SelectElement";




const StudentPromotion = props => {
    const [data, setData] = useState({
        fromClass: "",
        fromSection: "",
        toClass: "",
        toSection: "",
    });

    // input change handler
    const onChangeHandler = event => {
        const { value, name } = event.target;
        setData(prevState => {
            return {
                ...prevState,
                [name]: value,
            }
        })
    }

    // submit function
    const onSubmitHandler = async (event) => {
        event.preventDefault(event);
        try {
            const result = await axios.post("http://localhost:8080/api/admin/students/promote", data);
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <React.Fragment>
            <Form onSubmit={onSubmitHandler} >
                <Row>
                    <SelectElement
                        onChange={onChangeHandler}
                        label="From Class"
                        name="fromClass"
                        options={['level 1', "level 2"]}
                    />
                    <SelectElement
                        onChange={onChangeHandler}
                        label="From Section"
                        name="fromSection"
                        options={["A", "B", "C"]}
                    />
                    <SelectElement
                        onChange={onChangeHandler}
                        label="To Class"
                        name="toClass"
                        options={["leve 1", "level 2"]}
                    />
                    <SelectElement
                        onChange={onChangeHandler}
                        label="To Section"
                        name="toSection"
                        options={["A", "B", "C"]}
                    />
                </Row>
                <Row>
                    <Buttons title="Submit" />
                </Row>
            </Form>
        </React.Fragment>
    );
};



export default StudentPromotion;