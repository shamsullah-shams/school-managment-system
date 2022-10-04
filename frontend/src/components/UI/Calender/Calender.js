import React, { useState } from "react";
import Calendar from "react-calendar";
// import "./calender.css";
// import "react-calendar/dist/Calendar.css";
import "./calender.css";



const Calender = props => {
    const [value, onChange] = useState(new Date());
    return (
        <React.Fragment>
            <Calendar
                onChange={onChange}
                value={value}
                calendarType="Arabic"
            />
        </React.Fragment>
    );
};



export default Calender;