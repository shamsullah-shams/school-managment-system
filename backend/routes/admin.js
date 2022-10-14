import Express from "express";
import upload from "../middlewares/upload.js";
import {
    CreateClass,
    CreatePayment,
    CreateSection,
    CreateSubject,
    CreateTimeTable,
    GetAllClasses,
    GetAllSections,
    GetAllSubjects,
    GetAllTimeTables,
    GetPaymentsOfOneYear,
    GetSelectedClassStudends,
    GetSelectedTypeUsers,
    PromoteStudents,
    RagisterStudent,
    RagisterUser,
} from "../controllers/admin/admin.js";

const adminRoutes = Express.Router();

// @@ Get Requests
adminRoutes.get("/timetable/getalltimetables", GetAllTimeTables);
// @@ get Single Year Payments
adminRoutes.get("/payments/:year", GetPaymentsOfOneYear);
// @@ get Specefic Class Students' Payments
adminRoutes.get("/students/:selectedClass", GetSelectedClassStudends);
// @@ Get All Users who has same type
adminRoutes.get("/users/:type", GetSelectedTypeUsers);
// @@ Get All Classes from database
adminRoutes.get("/classes/getAll", GetAllClasses);
// @@ Get All Sections which are related to one class
adminRoutes.get("/sections/:selectedClass", GetAllSections);
// @@ Get All Subjects which are related to one Class
adminRoutes.get("/subjects/:selectedClass", GetAllSubjects);


// @@ Post Requests 
adminRoutes.post("/timetable/create", CreateTimeTable);
adminRoutes.post("/payment/create", CreatePayment);
adminRoutes.post("/classes/create", CreateClass);
adminRoutes.post("/student/ragister", upload.single("image"), RagisterStudent);
adminRoutes.post("/users/ragister", upload.single("image"), RagisterUser);
adminRoutes.post("/sections/create", CreateSection);
adminRoutes.post("/subjects/create", CreateSubject);
adminRoutes.post("/students/promote", PromoteStudents);


export default adminRoutes;