import React, { useState } from "react";
import Card from "../Card/Card";
// import CreateUser from "../CreateUser/CreateUser";
import Form from "../Form/Form";
import InputElement from "../Form/FormElement/InputElement";
import SelectElement from "../Form/FormElement/SelectElement";
import Row from "../UI/Row/Row";
import Buttons from "../UI/Button/Buttons";



const CreateSection = props => {
    return (
        <Form className="Left">
            <Row>
                <InputElement label="Name" placeholder="Section Name" />
            </Row>
            <Row>
                <SelectElement label="Select Class" options={["level 1", "level 2", "level 3"]} />
            </Row>
            <Row>
                <SelectElement label="Teacher" options={["shami", "faizi"]} />
            </Row>
            <Row>
                <Buttons
                    previos={{ title: "Previos" }}
                    next={{ title: "Next" }}
                />
            </Row>
        </Form>
    );
}



const Sections = props => {

    const [createSection, setCreateSection] = useState(true);
    const [manageSections, setManageSections] = useState(false);

    const createSectionHandler = () => {
        setCreateSection(true);
        setManageSections(false);
    }

    const manageSectionsHandler = () => {
        setCreateSection(false);
        setManageSections(true);
    }


    return (
        <main className="Main">
            <Card card title="Manage users">
                <Row>
                    <div className="Buutons__Group">
                        <button className={createSection ? "active" : ""} onClick={createSectionHandler}>Create Section</button>
                        <button className={manageSections ? "active" : ""} onClick={manageSectionsHandler}>Manage Sections</button>
                    </div>
                </Row>
                {
                    createSection ? <CreateSection /> : null
                }

            </Card>
        </main>
    );
};



export default Sections;