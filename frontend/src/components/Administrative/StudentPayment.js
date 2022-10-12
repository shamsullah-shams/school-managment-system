import React, { useState } from "react";
import Form from "../UI/Form/Form";
import Row from "../UI/Row/Row";
import { GrEdit } from "react-icons/gr";
import Buttons from "../UI/Button/Buttons";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import axios from "axios";

const StudentPayments = () => {
    const [selectedClass, setSelectedClass] = useState("");
    const [dbData, setDbData] = useState([]);
    const [showDbData, setShowDbData] = useState(false);

    const onChangeHandler = event => {
        setSelectedClass(event.target.value);
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault(event);
        // send Request to API //
        try {
            const result = await axios.get(`http://localhost:8080/api/admin/students/${selectedClass}`);
            setShowDbData(true);
        } catch (error) {

        }
    }


    return (
        <React.Fragment>
            <Form className="Left" onSubmit={onSubmitHandler}>
                <Row>
                    <SelectElement
                        label="Class"
                        options={["level 1", "level 2"]}
                        onChange={onChangeHandler}
                    />
                </Row>
                <Row>
                    <Buttons title="Submit" />
                </Row>
            </Form>
            {
                showDbData ? <React.Fragment>
                    <hr />
                    <table>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>Admision No</th>
                                <th>Manage Payments</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                showDbData ? dbData.map(SinglePayment => {
                                    return (
                                        <React.Fragment>
                                            <tr>
                                                <td colSpan="7">
                                                    <hr />
                                                </td>
                                            </tr>
                                            <tr key={SinglePayment[0]}>
                                                {
                                                    SinglePayment.map(property => {
                                                        return (
                                                            <td key={property}>{property}</td>
                                                        )
                                                    })
                                                }
                                                <td>
                                                    <GrEdit />
                                                </td>
                                            </tr>
                                        </React.Fragment>
                                    )
                                }) : null
                            }
                        </tbody>
                    </table>
                </React.Fragment> : null
            }
        </React.Fragment>
    );
};



export default StudentPayments;