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
    GetAllTeachers,
    GetAllTimeTables,
    GetPaymentsOfOneYear,
    GetSelectedClassStudends,
    GetSelectedTypeUsers,
    PromoteStudents,
    RagisterStudent,
    RagisterUser,
} from "../controllers/admin/admin.js";
import {
    DeleteSingleClass,
    DeleteSinglePayment,
    DeleteSingleSection,
    DeleteSingleStudent,
    DeleteSingleSubject,
    DeleteSingleTimetable,
    DeleteSingleUser
} from "../controllers/admin/adminDeleteController.js";

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
// @@ get all teacher names 
adminRoutes.get("/teachers/getAll", GetAllTeachers);


// @@ Post Requests 
adminRoutes.post("/timetable/create", CreateTimeTable);
adminRoutes.post("/payment/create", CreatePayment);
adminRoutes.post("/classes/create", CreateClass);
adminRoutes.post("/student/ragister", upload.single("image"), RagisterStudent);
adminRoutes.post("/users/ragister", upload.single("image"), RagisterUser);
adminRoutes.post("/sections/create", CreateSection);
adminRoutes.post("/subjects/create", CreateSubject);
adminRoutes.post("/students/promote", PromoteStudents);


// @@ Delete Requests 
adminRoutes.get("/payment/delete/:id", DeleteSinglePayment);
adminRoutes.get("/timetable/delete/:id", DeleteSingleTimetable);
adminRoutes.get("/classes/delete/:id", DeleteSingleClass);
adminRoutes.get("/sections/delete/:id", DeleteSingleSection);
adminRoutes.get("/students/delete/:id", DeleteSingleStudent);
adminRoutes.get("/subjects/delete/:id", DeleteSingleSubject);
adminRoutes.get("/users/delete/:id", DeleteSingleUser);


export default adminRoutes;