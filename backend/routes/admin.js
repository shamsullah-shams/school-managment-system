import Express from "express";
import upload from "../middlewares/upload.js";
import {
    CreateClass,
    CreatePayment,
    CreateSection,
    CreateSubject,
    CreateTimeTable,
    RagisterStudent,
    RagisterUser,
} from "../controllers/admin/admin.js";

const adminRoutes = Express.Router();



adminRoutes.post("/timetable/create", CreateTimeTable);
adminRoutes.post("/payment/create", CreatePayment);
adminRoutes.post("/classes/create", CreateClass);
adminRoutes.post("/student/ragister", upload.single("image"), RagisterStudent);
adminRoutes.post("/users/ragister", upload.single("image"), RagisterUser);
adminRoutes.post("/sections/create", CreateSection);
adminRoutes.post("/subjects/create", CreateSubject);


export default adminRoutes;