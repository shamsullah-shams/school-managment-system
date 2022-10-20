import React, { useState } from "react";
import axios from "axios";
import Row from "../UI/Row/Row";
import Form from "../UI/Form/Form";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import InputElement from "../UI/Form/FormElement/InputElement";
import Buttons from "../UI/Button/Buttons";
import { useSelector } from "react-redux";
import "./AdmitStudent.css";



const AdmitStudent = props => {

    const [isFirstPart, setIsFirstPart] = useState(true);
    // @@ Fetch Classes, Parents, Sections from Redux
    const classes = useSelector(state => state.loadTeachers.Classes);
    const parents = useSelector(state => state.loadTeachers.Parents);
    const sections = useSelector(state => state.loadTeachers.Sections);



    const [student, setStudent] = useState({
        fullName: "",
        address: "",
        email: "",
        gender: "",
        phone: "",
        dateOfBirth: "",
        nationality: "",
        state: "",
        bloodGroup: "",
        image: "",
        className: "",
        section: "",
        parent: "",
        addmissionNo: ""
    });

    const onChangeHandler = event => {

        const { name, value } = event.target;
        if (name === "image") {
            return setStudent(prevState => {
                return {
                    ...prevState,
                    image: event.target.files[0],
                }
            })
        }
        setStudent(previosState => {
            return {
                ...previosState,
                [name]: value,
            }
        });
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault(event);

        const formData = new FormData();
        // @@ create form data
        for (let value in student) {
            formData.append(value, student[value]);
        }

        try {
            const result = await axios.post("http://localhost:8080/api/admin/student/ragister", formData);
            // console.log(result);
        } catch (error) {
            console.log(error);
        }
    }




    // Change Form to First 
    const onFormChangeHandlerToFirstPart = event => {
        setIsFirstPart(true);
    }

    // Change Form to First 
    const onFormChangeHandlerToSecondPart = event => {
        setIsFirstPart(false);
    }


    const SecondPart = () => (
        <React.Fragment>
            <Row>
                <SelectElement
                    label="Class"
                    options={classes}
                    name="className"
                    onChange={onChangeHandler}
                />
                <SelectElement
                    label="Section"
                    options={sections}
                    name="section"
                    onChange={onChangeHandler}
                />
                <SelectElement
                    label="Parent"
                    options={parents}
                    name="parent"
                    onChange={onChangeHandler}
                />
                <InputElement
                    label="Admition No"
                    placeholder="Admission"
                    name="addmissionNo"
                    value={student.addmissionNo}
                    onChange={onChangeHandler}
                />
            </Row>
            <Row>
                <Buttons title="Submit" onClick={onSubmitHandler} />
            </Row>
        </React.Fragment>
    );

    const FirstPart = () => (
        <React.Fragment>

            <Row>
                <InputElement
                    label="Full Name"
                    placeholder="Full Name"
                    name="fullName"
                    value={student.fullName}
                    onChange={onChangeHandler}
                />
                <InputElement
                    label="Address"
                    placeholder="Address"
                    name="address"
                    value={student.address}
                    onChange={onChangeHandler}
                />
            </Row>
            <Row>
                <InputElement
                    label="Email Address"
                    placeholder="Email Address"
                    name="email"
                    value={student.email}
                    onChange={onChangeHandler}
                />
                <SelectElement
                    label="Gender"
                    options={["Male", "Female"]}
                    name="gender"
                    onChange={onChangeHandler}
                />
                <InputElement
                    label="Phone"
                    placeholder="Phone"
                    type="tele"
                    name="phone"
                    value={student.phone}
                    onChange={onChangeHandler}
                />
            </Row>
            <Row>
                <InputElement
                    label="Date Of Birth"
                    placeholder="Date Of Birth"
                    type="date"
                    name="dateOfBirth"
                    value={student.dateOfBirth}
                    onChange={onChangeHandler}
                />
                <SelectElement
                    label="Nationality"
                    options={["Afghan", "Indian", "pakistani", "Americon"]}
                    name="nationality"
                    onChange={onChangeHandler}
                />
                <SelectElement
                    label="State"
                    options={["Amreica", "Asia", "Urop", "North America"]}
                    name="state"
                    onChange={onChangeHandler}
                />
            </Row>
            <Row>
                <SelectElement
                    label="Blood Group"
                    options={["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]}
                    name="bloodGroup"
                    onChange={onChangeHandler}
                />
                <InputElement
                    label="Choose Image"
                    type="file"
                    name="image"
                    onChange={onChangeHandler}
                />
            </Row>
            <Row>
                <Buttons title="Next" onClick={onFormChangeHandlerToSecondPart} />
            </Row>
        </React.Fragment>
    );





    return (
        <React.Fragment>
            <div className="Group__Div">
                <div
                    className="Circle Active_Circle"
                    onClick={onFormChangeHandlerToFirstPart}
                >
                    1
                </div>
                <svg width="500" height="500"  >
                    <line x1="0" y1="12" x2="500" y2="12" stroke={isFirstPart ? "black" : "blue"} />
                </svg>
                <div
                    className={isFirstPart ? "Circle" : "Circle Active_Circle"}
                    onClick={onFormChangeHandlerToSecondPart}
                >
                    2
                </div>
            </div>

            <Form onSubmit={onSubmitHandler}>
                {
                    isFirstPart ? <FirstPart /> : <SecondPart />
                }
            </Form>

        </React.Fragment>
    );
};



export default AdmitStudent;