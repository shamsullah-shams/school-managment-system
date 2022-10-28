import React, { useContext } from "react";
import Context from "../../../../Cotext";
import "./AsideNavigationItems.css";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";
import { AnimatePresence, motion } from "framer-motion";



const Span = props => {

    const { showSideBarSpans } = useContext(Context);

    return (
        <AnimatePresence>
            {
                showSideBarSpans && <React.Fragment>
                    <motion.span
                        className="Span"
                        initial={{ opacity: 0, y: 0, }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        {props.title}
                        {
                            props.subMenu ? props.showSubNav ? <BsChevronDown /> : <BsChevronRight /> : null
                        }
                    </motion.span>
                </React.Fragment>
            }
        </AnimatePresence>
    );
};



export default Span;