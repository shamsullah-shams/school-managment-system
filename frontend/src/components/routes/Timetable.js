import React from "react";
import Card from "../Card/Card";
import Form from "../Form/Form";
import FormElement from "../Form/FormElement/InputElement";
import SelectElement from "../Form/FormElement/SelectElement";



const Timetable = props => {
    return (
        <main className="Main">
            <Card>Manage TimeTables</Card>
            <Card title="Manage TimeTables" card>
                <Form>
                    <FormElement
                        label="Name"
                        placeholder="Enter Name"
                    />
                    <SelectElement
                        label="Class"
                        options={["Nursery", "Level 1", "Level 2"]}
                    />
                    <SelectElement
                        label="Type"
                        options={["Class", "Exam"]}
                    />
                </Form>
            </Card>
        </main>
    );
};



export default Timetable;