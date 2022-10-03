import React, { useContext } from "react";
import "./Card.css";
import { ImCross } from "react-icons/im";
import { BsChevronUp, BsChevronDown } from "react-icons/bs";
import Context from "../../Cotext";


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
                                <div onClick={props.onClick} >X</div>
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