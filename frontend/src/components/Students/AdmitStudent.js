import React, { useState } from "react";
import axios from "../../api/axios";
import Row from "../UI/Row/Row";
import Form from "../UI/Form/Form";
import SelectElement from "../UI/Form/FormElement/SelectElement";
import InputElement from "../UI/Form/FormElement/InputElement";
import Buttons from "../UI/Button/Buttons";
import { useSelector } from "react-redux";
import "./AdmitStudent.css";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

let admitstd = 0;
// URLS
const ADMIT_STUDENT_URL = "/api/admin/student/ragister";


const AdmitStudent = props => {

    console.log("Admit std : ", ++admitstd);
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
            const result = await axios.post(ADMIT_STUDENT_URL, formData);
            if (result.status === 200) {
                // clear old values
                let newObject = {};
                for (let i in student) {
                    newObject[i] = "";
                }
                setStudent({ ...newObject });
                // show toast success messsage
                toast.success("Student is Added");
            }
        } catch (error) {
            // show toast error message
            toast.error(error.message);
        }
    }





    return (
        <React.Fragment>
            {/* Showing Toast Notification */}
            <ToastContainer
                autoClose={5000}
            />

            <Form onSubmit={onSubmitHandler}>
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
                        value={student.gender}
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
                        value={student.nationality}
                        onChange={onChangeHandler}
                    />
                    <SelectElement
                        label="State"
                        options={["Amreica", "Asia", "Urop", "North America"]}
                        name="state"
                        value={student.state}
                        onChange={onChangeHandler}
                    />
                </Row>
                <Row>
                    <SelectElement
                        label="Blood Group"
                        options={["A+", "A-", "B+", "B-", "O+", "O-", "AB+", "AB-"]}
                        name="bloodGroup"
                        value={student.bloodGroup}
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
                    <SelectElement
                        label="Class"
                        options={classes}
                        name="className"
                        value={student.className}
                        onChange={onChangeHandler}
                    />
                    <SelectElement
                        label="Section"
                        options={sections}
                        name="section"
                        value={student.section}
                        onChange={onChangeHandler}
                    />
                    <SelectElement
                        label="Parent"
                        options={parents}
                        name="parent"
                        value={student.parent}
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
            </Form>

        </React.Fragment>
    );
};



export default AdmitStudent;