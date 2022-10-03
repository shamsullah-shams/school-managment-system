import React, { useState } from "react";
import Card from "../Card/Card";
import Form from "../Form/Form";
import InputElement from "../Form/FormElement/InputElement";
import SelectElement from "../Form/FormElement/SelectElement";
import Buttons from "../UI/Button/Buttons";
import Row from "../UI/Row/Row";
import "./Administrative.css";

const CreatePayments = () => {
    return (
        <Form className="Left">
            <Row>
                <InputElement label="Title" placeholder="Eg. School Fee" />
            </Row>
            <Row>
                <SelectElement label="Class" options={["all classes", "level 1", "level 2"]} />
            </Row>
            <Row>
                <InputElement label="Amount" placeholder="Amount" />
            </Row>
            <Row>
                <InputElement label="Description" placeholder="Discription" />
            </Row>
            <Row>
                <Buttons
                    previos={{ title: "Previos" }}
                    next={{ title: "Next" }}
                />
            </Row>
        </Form>
    );
};

const ManagePayments = () => {
    return (
        <Form className="Left">
            <Row>
                <InputElement label="Year" placeholder="Select Year" />
            </Row>
        </Form>
    );
}

const StudentPayments = () => {
    return (
        <Form className="Left">
            <Row>
                <InputElement label="Class" placeholder="Select Class" />
            </Row>
        </Form>
    );
};





const Administrative = props => {

    const [createPayment, setCreatePayment] = useState(true);
    const [managePayments, setManagePayments] = useState(false);
    const [studentPayments, setStudentPayments] = useState(false);

    const createPaymenthandler = () => {
        setCreatePayment(true);
        setManagePayments(false);
        setStudentPayments(false);
    }

    const managePaymentsHandler = () => {
        setCreatePayment(false);
        setManagePayments(true);
        setStudentPayments(false);
    };


    const studentPaymentsHandler = () => {
        setCreatePayment(false);
        setManagePayments(false);
        setStudentPayments(true);
    }


    return (
        <main className="Main">
            <Card card title="Manage Payments" >
                <Row>
                    <div className="Buutons__Group">
                        <button className={createPayment ? "active" : ""} onClick={createPaymenthandler}>create payment</button>
                        <button className={managePayments ? "active" : ""} onClick={managePaymentsHandler}>manage payments</button>
                        <button className={studentPayments ? "active" : ""} onClick={studentPaymentsHandler}>student payments</button>
                    </div>
                </Row>
                {
                    createPayment ? <CreatePayments /> : null
                }
                {
                    managePayments ? <ManagePayments /> : null
                }
                {
                    studentPayments ? <StudentPayments /> : null
                }
            </Card>
        </main>
    );
};



export default Administrative;