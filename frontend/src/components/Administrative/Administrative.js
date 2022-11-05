import React, { useState } from "react";
import ManagePayments from "./ManagePayment";
import Row from "../UI/Row/Row";
import "../Root.css";
import CreatePayments from "./CreatePayment";
import StudentPayments from "./StudentPayment";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Title from "../UI/Title/Title";



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
        <Grid item xs={12}>
            <Paper sx={{ p: 5, display: 'flex', flexDirection: 'column' }}>
                <Title>Manage Payments</Title>
                <main>
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
                </main>
            </Paper>
        </Grid>
    );
};



export default Administrative;