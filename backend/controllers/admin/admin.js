import Classes from "../../models/class.js";
import Payment from "../../models/payment.js";
import Section from "../../models/section.js";
import Student from "../../models/student.js";
import Subject from "../../models/subject.js";
import TimeTable from "../../models/timeTable.js";
import User from "../../models/user.js";

export const CreateClass = async (req, res, next) => {
    const { newClass } = req.body;
    console.log(newClass)

    const NC = new Classes({
        className: newClass.name,
        classType: newClass.type,
    });

    try {
        const result = await NC.save();
        console.log(result);
        return res.send(result);
    } catch (error) {
        return console.log(error);
    }
}

// @@ Ragister Students
export const RagisterStudent = async (req, res, next) => {
    const {
        fullName,
        address,
        email,
        gender,
        phone,
        dateOfBirth,
        nationality,
        state,
        bloodGroup
    } = req.body;

    const imageUrl = req.file.path;
    const NStudent = new Student({
        fullName,
        address,
        email,
        gender,
        phone,
        dateOfBirth,
        nationality,
        state,
        bloodGroup,
        imageUrl,
    })

    try {
        const result = await NStudent.save();
        return res.send(result);
    } catch (error) {
        return res.send(error)
    }
};

export const CreateTimeTable = (req, res, next) => {
    const { timeTable } = req.body;
    const NT = new TimeTable({
        name: timeTable.name,
        className: timeTable.className,
        type: timeTable.type,
    });
    try {
        const result = NT.save();
        return res.send(result);
    } catch (error) {
        return console.log(error);
    }
}


export const CreatePayment = async (req, res, next) => {
    const { payment } = req.body;

    const newPayment = new Payment({
        title: payment.title,
        className: payment.class,
        amount: payment.amount,
        description: payment.description,
    });

    try {
        const result = await newPayment.save();
        return res.send(result);
    } catch (error) {
        return console.log(error);
    }


}



// @@ Ragister New User
export const RagisterUser = (req, res, next) => {
    const {
        userType,
        fullName,
        address,
        email,
        userName,
        phone,
        dateOfBirth,
        password,
        gender,
        nationality,
        state,
        bloodGroup,
    } = req.body;

    const imageUrl = req.file.path;

    const NUser = new User({
        userType,
        fullName,
        address,
        email,
        userName,
        phone,
        dateOfBirth,
        password,
        gender,
        nationality,
        state,
        bloodGroup,
        imageUrl,
    })

    try {
        const result = NUser.save();
        return res.send(result);
    } catch (error) {
        return res.send(error);
    }

}


// @@ create new section
export const CreateSection = async (req, res, next) => {
    const { name, className, teacher } = req.body;
    const NSection = new Section({ name, className, teacher });
    try {
        const result = await NSection.save();
        return res.send(result);
    } catch (error) {
        return res.send(error);
    }
};


// @@ create new Subject 
export const CreateSubject = async (req, res, next) => {
    const { name, shortName, teacher, subjectClass } = req.body;

    const NewSubject = new Subject({
        name,
        shortName,
        teacher,
        subjectClass
    });

    try {
        const result = await NewSubject.save();
        return res.send(result);
    } catch (error) {
        return res.send(error);
    }

}