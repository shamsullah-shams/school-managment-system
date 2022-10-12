import React, { useState } from "react";
import Card from "../UI/Card/Card";
import Row from "../UI/Row/Row";
import CreateSection from "./CreateSection";




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
            <Card card title="Manage Sections">
                <Row>
                    <div className="Buutons__Group">
                        <button className={createSection ? "active__button" : ""} onClick={createSectionHandler}>Create Section</button>
                        <button className={manageSections ? "active__button" : ""} onClick={manageSectionsHandler}>Manage Sections</button>
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