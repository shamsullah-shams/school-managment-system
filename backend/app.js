import Express from "express";
import sequelize from "./config/database.js";

const app = Express();


try {
    await sequelize.authenticate();
    console.log("connection successed");
    await sequelize.sync();
    app.listen(8080, () => {
        console.log("server is running");
    })
} catch (error) {
    console.log(error);
}




