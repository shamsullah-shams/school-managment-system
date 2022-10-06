import React, { useState } from "react";
import Card from "../UI/Card/Card";
import Form from "../UI/Form/Form";
import InputElement from "../UI/Form/FormElement/InputElement";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import Buttons from "../UI/Button/Buttons";
import Row from "../UI/Row/Row";
import axios from "axios";
import "../Root.css";

const CreatePayments = () => {

    const [payment, setPayment] = useState({
        title: "",
        class: "",
        amount: "",
        description: "",
    })

    const onChangeHandler = event => {
        const { name, value } = event.target;
        setPayment(prevState => {
            return {
                ...prevState,
                [name]: value,
            }
        })
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault(event);
        try {
            const result = await axios.post("http://localhost:8080/api/admin/payment/create", {
                payment: payment,
            })
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <Form className="Left" onSubmit={onSubmitHandler}>
            <Row>
                <InputElement
                    label="Title"
                    placeholder="Eg. School Fee"
                    name="title"
                    value={payment.title}
                    onChange={onChangeHandler}
                />
            </Row>
            <Row>
                <SelectElement
                    label="Class"
                    options={["all classes", "level 1", "level 2"]}
                    name="class"
                    onChange={onChangeHandler}
                />
            </Row>
            <Row>
                <InputElement
                    label="Amount"
                    placeholder="Amount"
                    name="amount"
                    value={payment.amount}
                    onChange={onChangeHandler}
                />
            </Row>
            <Row>
                <InputElement
                    label="Description"
                    placeholder="Discription"
                    name="description"
                    value={payment.description}
                    onChange={onChangeHandler}
                />
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
                        <button className={createPayment ? "active__button" : ""} onClick={createPaymenthandler}>create payment</button>
                        <button className={managePayments ? "active__button" : ""} onClick={managePaymentsHandler}>manage payments</button>
                        <button className={studentPayments ? "active__button" : ""} onClick={studentPaymentsHandler}>student payments</button>
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