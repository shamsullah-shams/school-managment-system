import React, { useContext } from "react";
import Context from "../../../../Cotext";
import "./AsideNavigationItems.css";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";

const Span = props => {

    const { showSideBarSpans } = useContext(Context);

    return (
        <React.Fragment>
            {
                showSideBarSpans ? <React.Fragment>
                    <span className="Span">
                        {props.title}
                        {
                            props.subMenu ? props.showSubNav ? <BsChevronDown /> : <BsChevronRight /> : null
                        }
                    </span>
                </React.Fragment> : null
            }
        </React.Fragment>
    );
};



export default Span;