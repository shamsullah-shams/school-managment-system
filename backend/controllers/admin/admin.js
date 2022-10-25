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
        bloodGroup,
        parent,
        section,
        addmissionNo,
        className,
    } = req.body;

    let imageUrl;
    try {
        imageUrl = req.file.path;
    } catch (error) {
        console.log(error.message);
    }
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
        parent,
        className,
        section,
        addmissionNo,
    })

    try {
        const result = await NStudent.save();
        console.log(result);
        return res.send(result);
    } catch (error) {
        console.log(error);
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

    const year = new Date().toISOString().split("-")[0];

    const newPayment = new Payment({
        title: payment.title,
        className: payment.class,
        amount: payment.amount,
        description: payment.description,
        year: year
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

    let imageUrl;
    try {
        imageUrl = req.file.path;
    } catch (error) {
        console.log(error);
    }

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
    const { name, shortName, teacher, className } = req.body;

    const NewSubject = new Subject({
        name,
        shortName,
        teacher,
        className
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

    try {
        const result = await Student.findAll({ where: { className: selectedClass } });
        const resultArray = result.map(singleStudent => {
            return {
                id: singleStudent.dataValues.id,
                imageUrl: singleStudent.dataValues.imageUrl,
                fullName: singleStudent.dataValues.fullName,
                addmissionNo: singleStudent.dataValues.addmissionNo,
                section: singleStudent.dataValues.section,
                email: singleStudent.dataValues.email,
            }
        });
        console.log(result);
        return res.send(resultArray);
    } catch (error) {
        return console.log(error);
    }
}



// Promote Student from One Class TO An Other
export const PromoteStudents = async (req, res, next) => {

    const { fromClass, fromSection, toClass, toSection } = req.body;

    try {
        const result = await Student.update(
            { className: toClass, section: toSection },
            { where: { className: fromClass, section: fromSection } }
        )
        console.log(result);
        return res.send(result);
    } catch (error) {
        return res.send(error);
    }
}



// @@ Get Users Who Has same type 
export const GetSelectedTypeUsers = async (req, res, next) => {
    const { type } = req.params;

    try {
        const result = await User.findAll({ where: { userType: type } });
        const newArray = result.map(singleObject => singleObject.dataValues);
        return res.send(newArray);
    } catch (error) {
        return res.send(error);
    }
}


// Get All Classes
export const GetAllClasses = async (req, res, next) => {
    try {
        const result = await Classes.findAll();
        const newArray = result.map(SingleObject => SingleObject.dataValues);
        return res.send(newArray);
    } catch (error) {
        return res.send(error);
    }

}


// Get All Section which are related to one Class
export const GetAllSections = async (req, res, next) => {
    const { selectedClass } = req.params;
    try {
        const result = await Section.findAll({
            where: {
                className: selectedClass
            }
        });
        const newArray = result.map(SingleObject => SingleObject.dataValues);
        return res.send(newArray);
    } catch (error) {
        return res.send(error);
    }
}


// Get All Subjects which are related to one class
export const GetAllSubjects = async (req, res, next) => {
    const { selectedClass } = req.params;

    console.log("selectedClass", selectedClass);

    try {
        const result = await Subject.findAll({
            where: {
                className: selectedClass
            }
        });
        const newArray = result.map(SingleObject => SingleObject.dataValues);
        console.log("new Array", newArray);
        return res.send(newArray);
    } catch (error) {
        console.log(error);
    }
}


// Get All Teachers Name 
export const GetAllTeachers = async (req, res, next) => {
    console.log("req")
    try {
        let result = await User.findAll(
            {
                where: {
                    userType: "Teacher"
                }
            }
        );
        // Array of All Teachers
        const teachers = result.map(singleObject => singleObject.dataValues.fullName);
        result = await User.findAll(
            {
                where: {
                    userType: "Parent"
                }
            }
        );
        // Array of All Parents 
        const parents = result.map(singleObject => singleObject.dataValues.fullName);
        result = await Classes.findAll();
        // Array of All Classes
        const classes = result.map(singleObject => singleObject.dataValues.className);

        result = await Section.findAll();
        // Array of Sections 
        const sections = result.map(singleObject => singleObject.dataValues.name);


        return res.json({
            teachers: teachers,
            parents: parents,
            classes: classes,
            sections: sections,
        })
    } catch (error) {
        return res.send(error);
    }
}