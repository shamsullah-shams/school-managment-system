import React from "react";
import Form from "../UI/Form/Form";
import Row from "../UI/Row/Row";
import InputElement from "../UI/Form/FormElement/InputElement";
import Buttons from "../UI/Button/Buttons";




const StudentPromotion = props => {
    return (
        <Form>
            <Row>
                <InputElement label="From Class" placeholder="From Class" />
                <InputElement label="From Section" placeholder="From Sections" />
                <InputElement label="To Class" placeholder="To Class" />
                <InputElement label="To Section" placeholder="To Section" />
            </Row>
            <Row>
                <Buttons title="Submit" />
            </Row>
        </Form>
    );
};



export default StudentPromotion;