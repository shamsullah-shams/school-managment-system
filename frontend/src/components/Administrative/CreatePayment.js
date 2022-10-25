import React, { useState } from "react";
import axios from "axios";
import Form from "../UI/Form/Form";
import Buttons from "../UI/Button/Buttons";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import InputElement from "../UI/Form/FormElement/InputElement";
import Row from "../UI/Row/Row";
import { useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


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
            if (result.status === 200) {
                // show message 
                // clear old input values
                toast.success("Payment is added");
                // clear old input values
                let newObject = {};
                for (let i in payment) {
                    newObject[i] = "";
                }
                setPayment({ ...newObject })
            }
        } catch (error) {
            toast.error(error.message);
        }
    }
    // @@ Fetch Classes from Redux
    const classes = useSelector(state => state.loadTeachers.Classes);

    return (
        <React.Fragment>
            <ToastContainer autoClose={5000} />
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
                        options={classes}
                        name="class"
                        value={payment.class}
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
                    <Buttons title="Submit" />
                </Row>
            </Form>
        </React.Fragment>
    );
};


export default CreatePayments;