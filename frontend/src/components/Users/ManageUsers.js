import React, { useState } from "react";
import axios from "axios";
import Form from "../UI/Form/Form";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import Row from "../UI/Row/Row";
import Buttons from "../UI/Button/Buttons";
import Table from "../UI/Table/Table";


const ManageUsers = props => {
    const [selectedType, setSelectedType] = useState("");
    const [dbData, setDbData] = useState([]);
    const [showDbData, setShowDbData] = useState(false);
    const tableHeaders = ["S/N", "Photo", "Name", "User Name", "Email", "Edit"]

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
                    <Table
                        tableHeaders={tableHeaders}
                        tableBody={dbData}
                    />
                </React.Fragment> : null
            }
        </React.Fragment>
    );
}


export default ManageUsers;