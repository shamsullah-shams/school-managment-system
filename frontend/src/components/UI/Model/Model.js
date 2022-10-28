import React from "react";
import "./Model.css";
import { motion } from "framer-motion"

const Backdrop = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
}


const model = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "100%",
        opacity: 1,
        transition: {
            delay: 0.5
        }
    }
}


const Model = props => {
    return (
        <motion.div
            className="Backdrop"
            variants={Backdrop}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={props.onExitComplete}
        >
            <motion.div
                className="Model"
                variants={model}
                initial="hidden"
                animate="visible"
                exit="hidden"
            >
                <p>Are You Sure Want to Delete {props.message}</p>
                <button onClick={props.onExitComplete}>cancel</button>
                <button onClick={props.confirm}>Delete</button>
            </motion.div>
        </motion.div>
    );
};



export default Model;