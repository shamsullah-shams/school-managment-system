import React, { useState } from "react";
import "./Card.css";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";


const Card = props => {

    const [showContent, setShowContent] = useState(true);
    const [showCard, setShowCard] = useState(true);

    // Manage Content
    const showContentHandler = event => {
        setShowContent(!showContent);
    }

    // Remove Card
    const onShowCardHandler = event => {
        setShowCard(false);
    }

    let classNames = [props.className, "Card"]

    return (
        <React.Fragment>
            {
                showCard ? <div className={classNames.join(" ")}>
                    {
                        props.card ? (
                            <React.Fragment>
                                <div className="Card__Body">
                                    {
                                        props.title
                                    }
                                    <div className="Toggle__Remove">
                                        {
                                            showContent ? <BsChevronUp onClick={showContentHandler} />
                                                : <BsChevronDown onClick={showContentHandler} />
                                        }
                                        <div onClick={onShowCardHandler} >X</div>
                                    </div>
                                </div>
                                <hr />
                            </React.Fragment>
                        ) : null

                    }
                    {
                        showContent ? props.children : null
                    }
                </div> : null
            }
        </React.Fragment>
    );
};



export default Card;