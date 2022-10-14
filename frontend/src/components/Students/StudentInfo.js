import axios from "axios";
import React, { useState } from "react";
import Buttons from "../UI/Button/Buttons";
import Form from "../UI/Form/Form";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import Row from "../UI/Row/Row";
import { GrEdit } from "react-icons/gr";




const StudentInfo = props => {
    const [selectedClass, setSelectedClass] = useState("");
    const [dbData, setDbData] = useState([]);
    const [showDbData, setShowDbData] = useState(false);

    // onChange Function
    const onChangeHandler = event => {
        setSelectedClass(event.target.value);
    }

    // onChange Submit Function
    const onSubmitHandler = async (event) => {
        event.preventDefault(event);
        try {
            const result = await axios.get(`http://localhost:8080/api/admin/students/${selectedClass}`);
            console.log(result);
            let counter = 0;
            const newArray = result.data.map(singleStudent => {
                counter++;
                return [
                    counter,
                    singleStudent.imageUrl,
                    singleStudent.fullName,
                    singleStudent.addmissionNo,
                    singleStudent.section,
                    singleStudent.email,
                ]
            });

            setDbData(newArray);
            setShowDbData(true);
        } catch (error) {

        }
    }


    return (
        <React.Fragment>
            <Form onSubmit={onSubmitHandler} className="Left">
                <Row>
                    <SelectElement label="Class" options={["level 1", "level 2"]} onChange={onChangeHandler} />
                </Row>
                <Buttons title="Submit" />
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
                                <th>Section</th>
                                <th>Email</th>
                                <th>Manage Studnets</th>
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



export default StudentInfo;