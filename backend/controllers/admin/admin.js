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

    const year = new Date().toISOString().split("-")[0];


    const NT = new TimeTable({
        name: timeTable.name,
        className: timeTable.className,
        type: timeTable.type,
        year: year
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

    // const year = new Date().toISOString().split("-")[0];

    const newPayment = new Payment({
        title: payment.title,
        className: payment.class,
        amount: payment.amount,
        description: payment.description,
        year: "2023"
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



// Return all TimeTables from database 
export const GetAllTimeTables = async (req, res, next) => {
    try {
        const data = await TimeTable.findAll();

        const timeTables = data.map(d => {
            return [
                d.dataValues.id,
                d.dataValues.name,
                d.dataValues.className,
                d.dataValues.type,
                d.dataValues.year,
            ]
        });
        console.log(timeTables);
        return res.send(timeTables);

    } catch (error) {
        return res.send(error);
    }
}


// Return Payments of One Year from Database 
// export const GetAllPayments = async (req, res, next) => {
//     console.log("sime")
//     // try {
//     //     const payments = await Payment.findAll();
//     //     console.log(payments);
//     //     return res.send(payments);
//     // } catch (error) {
//     //     return res.send(payments);
//     // }
// }


export const GetPaymentsOfOneYear = async (req, res, next) => {
    const { year } = req.params;
    try {
        const payments = await Payment.findAll({ where: { year: year } });
        const newArrayOfPayments = payments.map(sp => {
            return {
                id: sp.dataValues.id,
                title: sp.dataValues.title,
                className: sp.dataValues.className,
                amount: sp.dataValues.amount,
                description: sp.dataValues.description,
                year: sp.dataValues.year,
            }
        });
        return res.send(newArrayOfPayments);
    } catch (error) {
        return console.log(error.message);
    }
}


export const GetSelectedClassStudends = async (req, res, next) => {
    const { selectedClass } = req.params;
    // try {
    //     const result = await Student.findAll({where : { className : selectedClass}});

    // } catch (error) {

    // }
    return res.send("success");
}