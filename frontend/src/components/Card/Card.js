import React from "react";
import "./Card.css";



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
                                <div>^</div>
                                <div>X</div>
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