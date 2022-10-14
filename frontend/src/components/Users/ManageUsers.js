import React, { useState } from "react";
import axios from "axios";
import Form from "../UI/Form/Form";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import Row from "../UI/Row/Row";
import Buttons from "../UI/Button/Buttons";
import { GrEdit } from "react-icons/gr";


const ManageUsers = props => {
    const [selectedType, setSelectedType] = useState("");
    const [dbData, setDbData] = useState([]);
    const [showDbData, setShowDbData] = useState(false);

    const onChangeHandler = event => {
        setSelectedType(event.target.value);
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault(event);
        try {
            const result = await axios.get(`http://localhost:8080/api/admin/users/${selectedType}`);
            let counter = 0;
            const newArray = result.data.map(SingleObject => {
                counter++;
                return [
                    counter,
                    SingleObject.imageUrl,
                    SingleObject.fullName,
                    SingleObject.userName,
                    SingleObject.email,
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
                        label="User Type"
                        options={["Teacher", "Accountant", "Parent"]}
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
                                <th>S/N</th>
                                <th>Photo</th>
                                <th>Name</th>
                                <th>User Name</th>
                                <th>Email</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                showDbData ? dbData.map(SinglePayment => {
                                    return (
                                        <React.Fragment>
                                            <tr>
                                                <td colSpan="6">
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
}


export default ManageUsers;