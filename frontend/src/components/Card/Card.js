import React from "react";
import "./Card.css";



const Card = props => {

    let classNames = [props.className, "Card"]

    return (
        <div className={classNames.join(" ")}>
            {
                props.card ? (
                    <div>
                        <div className="Card_Body">
                            {
                                props.title
                            }
                            <div>
                                <pre>^  X</pre>
                            </div>
                        </div>
                        <hr />
                    </div>
                ) : null

            }
            {
                props.children
            }
        </div>
    );
};



export default Card;