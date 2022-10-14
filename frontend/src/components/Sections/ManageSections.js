import axios from "axios";
import React, { useState } from "react";
import Buttons from "../UI/Button/Buttons";
import Form from "../UI/Form/Form";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import Row from "../UI/Row/Row";
import { GrEdit } from "react-icons/gr";



const ManageSections = props => {
    const [dbData, setDbData] = useState([]);
    const [showDbData, setShowDbData] = useState(false);
    const [selectedClass, setSelectedClass] = useState("");

    // @@ handling input changes
    const onChangeHandler = event => {
        setSelectedClass(event.target.value);
    }

    // @@ handling form submission
    const onSubmitHandler = async (event) => {
        event.preventDefault();
        try {
            const result = await axios.get(`http://localhost:8080/api/admin/sections/${selectedClass}`);
            let counter = 0;
            const newArray = result.data.map(SingleObject => {
                counter++;
                return [
                    counter,
                    SingleObject.name,
                    SingleObject.className,
                    SingleObject.teacher,
                ]
            });
            setDbData(newArray);
            setShowDbData(true);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <React.Fragment>
            <Form className="Left" onSubmit={onSubmitHandler}>
                <Row>
                    <SelectElement
                        onChange={onChangeHandler}
                        label="Class"
                        options={["level 1", "level 2"]}
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
                                <th>S/N</th>
                                <th>Name</th>
                                <th>Class Name</th>
                                <th>Teacher No</th>
                                <th>Action</th>
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



export default ManageSections;