import React from "react";
import axios from "axios";
import Form from "../UI/Form/Form";
import InputElement from "../UI/Form/FormElement/InputElement";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import Buttons from "../UI/Button/Buttons";
import Row from "../UI/Row/Row";


const ManageProfile = props => {
    return (
        <Form className="Left">
            <Row>
                <InputElement label="Name" value="Shamsullah" disabled />
            </Row>
            <Row>
                <InputElement label="User Name" value="Admin" disabled />
            </Row>
            <Row>
                <InputElement label="E-mail" value="admin@admin.gmail.com" />
            </Row>
            <Row>
                <InputElement label="Phone" placeholder="Phone" type="tel" />
            </Row>
            <Row>
                <InputElement label="Address" placeholder="Address" />
            </Row>
            <Row>
                <Buttons title="Submit" />
            </Row>
        </Form>
    );
};


export default ManageProfile;