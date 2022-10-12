import React, { useState } from "react";
import axios from "axios";
import Form from "../UI/Form/Form";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import Row from "../UI/Row/Row";
import Buttons from "../UI/Button/Buttons";
import { GrEdit } from "react-icons/gr";




const ManagePayments = () => {
    const [getYear, setGetYear] = useState("");
    const [paymentData, setPaymentData] = useState([]);
    const [tableBody, setTableBody] = useState(false);

    const onChangeHandler = event => {
        setGetYear(event.target.value);
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault(event);
        try {
            const yearPayments = await axios.get(`http://localhost:8080/api/admin/payments/${getYear}`);
            setTableBody(true);
            const newArray = yearPayments.data.map(SO => {
                return [
                    SO.id,
                    SO.title,
                    SO.className,
                    SO.amount,
                    SO.year,
                    SO.description
                ]
            });
            setPaymentData(newArray);
        } catch (error) {
            console.log(error);
        }
    }

    let year = new Date().toISOString().split("-")[0];
    const yearArray = [year, --year, --year, --year, --year, --year];

    return (
        <React.Fragment>
            <Form className="Left" onSubmit={onSubmitHandler}>
                <Row>
                    <SelectElement onChange={onChangeHandler} label="Year" options={yearArray} />
                </Row>
                <Row>
                    <Buttons title="Submit" />
                </Row>
            </Form>
            {
                tableBody ? <React.Fragment>
                    <hr />
                    <table>
                        <thead>
                            <tr>
                                <th>id</th>
                                <th>title</th>
                                <th>Class</th>
                                <th>amount</th>
                                <th>Year</th>
                                <th>description</th>
                                <th>Edit</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                tableBody ? paymentData.map(SinglePayment => {
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
}


export default ManagePayments;