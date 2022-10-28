import Payment from "../../models/payment.js";
import User from "../../models/user.js";
import Subject from "../../models/subject.js";
import TimeTable from "../../models/timeTable.js";
import Section from "../../models/section.js";
import Student from "../../models/student.js";
import Classes from "../../models/class.js";






export const DeleteSinglePayment = async (req, res, next) => {
    const { id } = req.params;

    try {
        await Payment.destroy({ where: { id: id } });
        return res.send("succes");
    } catch (error) {
        return res.send(error);
    }

}



export const DeleteSingleTimetable = async (req, res, next) => {
    const { id } = req.params;


    try {
        await TimeTable.destroy({ where: { id: id } });
        return res.send("succes");
    } catch (error) {
        return res.send(error);
    }
}


export const DeleteSingleClass = async (req, res, next) => {
    const { id } = req.params;

    try {
        await Classes.destroy({ where: { id: id } });
        return res.send("success");
    } catch (error) {
        return res.send(error);
    }
}


export const DeleteSingleSection = async (req, res, next) => {
    const { id } = req.params;


    try {
        await Section.destroy({ where: { id: id } });
        return res.send("success");
    } catch (error) {
        return res.send(error)
    }

}



export const DeleteSingleStudent = async (req, res, next) => {
    const { id } = req.params;


    try {
        await Student.destroy({ where: { id: id } });
        return res.send("sucess");
    } catch (error) {
        return res.send(error);
    }
}


export const DeleteSingleSubject = async (req, res, next) => {
    const { id } = req.params;

    try {
        await Subject.destroy({ where: { id: id } });
        return res.send("success");
    } catch (error) {
        return res.send(error);
    }
}


export const DeleteSingleUser = async (req, res, next) => {
    const { id } = req.params;

    console.log(id);

    try {
        await User.destroy({ where: { id: id } });
        return res.send("success");
    } catch (error) {
        return res.send(error);
    }
}