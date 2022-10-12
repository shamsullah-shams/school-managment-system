import Express from "express";
import upload from "../middlewares/upload.js";
import {
    CreateClass,
    CreatePayment,
    CreateSection,
    CreateSubject,
    CreateTimeTable,
    GetAllTimeTables,
    GetPaymentsOfOneYear,
    GetSelectedClassStudends,
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


// @@ Post Requests 
adminRoutes.post("/timetable/create", CreateTimeTable);
adminRoutes.post("/payment/create", CreatePayment);
adminRoutes.post("/classes/create", CreateClass);
adminRoutes.post("/student/ragister", upload.single("image"), RagisterStudent);
adminRoutes.post("/users/ragister", upload.single("image"), RagisterUser);
adminRoutes.post("/sections/create", CreateSection);
adminRoutes.post("/subjects/create", CreateSubject);


export default adminRoutes;