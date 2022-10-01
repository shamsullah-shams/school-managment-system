import React from "react";
import "./Card.css";
import { ImCross } from "react-icons/im";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";

const Card = props => {

    let classNames = [props.className, "Card"]

    return (
        <div className={classNames.join(" ")}>
            {
                props.card ? (
                    <React.Fragment>
                        <div className="Card__Body">
                            {
                                props.title
                            }
                            <div className="Toggle__Remove">
                                <BsChevronUp />
                                <ImCross />
                            </div>
                        </div>
                        <hr />
                    </React.Fragment>
                ) : null

            }
            {
                props.children
            }
        </div>
    );
};



export default Card;