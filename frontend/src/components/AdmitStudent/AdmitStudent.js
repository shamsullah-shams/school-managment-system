import React, { useState } from "react";
import Card from "../Card/Card";
import Form from "../Form/Form";
import InputElement from "../Form/FormElement/InputElement";
import SelectElement from "../Form/FormElement/SelectElement";
import Buttons from "../UI/Button/Buttons";
import Row from "../UI/Row/Row";



const Admitstudent = props => {
    const [showContent, setShowContent] = useState(true);
    const showContentHandler = () => {
        setShowContent(false);
    }
    return (
        <main className="Main">
            {
                showContent ?
                    <Card card title="Manage Students" onClick={showContentHandler}>
                        <Form>
                            <Row>
                                <InputElement label="Full Name" placeholder="Full Name" />
                                <InputElement label="Address" placeholder="Address" />
                            </Row>
                            <Row>
                                <InputElement label="Email Address" placeholder="Email Address" />
                                <SelectElement label="Gender" options={["Male", "Female"]} />
                                <InputElement label="Phone" placeholder="Phone" type="number" />
                                <InputElement label="Telephone" placeholder="Telephone" type="number" />
                            </Row>
                            <Row>
                                <InputElement label="Date Of Birth" placeholder="Date Of Birth" type="date" />
                                <SelectElement label="Nationality" options={["Afghan", "Indian", "pakistani", "Americon"]} />
                                <SelectElement label="State" options={["Amreica", "Asia", "Urop", "North America"]} />
                                <SelectElement label="LGA" options={["some"]} />
                            </Row>
                            <Row>
                                <SelectElement label="Blood Group" options={["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]} />
                                <InputElement label="Choose Image" type="file" />
                            </Row>
                            <Row>
                                <Buttons previos={{ title: "Previos" }} next={{ title: "Next" }} />
                            </Row>
                        </Form>
                    </Card> : null
            }
        </main>
    );
};



export default Admitstudent;