import React, { useState } from "react";
import Form from "../UI/Form/Form";
import Row from "../UI/Row/Row";
import axios from "axios";
import Buttons from "../UI/Button/Buttons";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import { useSelector } from "react-redux";



const StudentPromotion = props => {
    const [data, setData] = useState({
        fromClass: "",
        fromSection: "",
        toClass: "",
        toSection: "",
    });

    // Fetch Classes and Sections from Redux
    const classes = useSelector(state => state.loadTeachers.Classes);
    const sections = useSelector(state => state.loadTeachers.Sections);


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
            // console.log(result);
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
                        options={classes}
                    />
                    <SelectElement
                        onChange={onChangeHandler}
                        label="From Section"
                        name="fromSection"
                        options={sections}
                    />
                    <SelectElement
                        onChange={onChangeHandler}
                        label="To Class"
                        name="toClass"
                        options={classes}
                    />
                    <SelectElement
                        onChange={onChangeHandler}
                        label="To Section"
                        name="toSection"
                        options={sections}
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