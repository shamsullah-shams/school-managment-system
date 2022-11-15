import Express from "express";
import sequelize from "./config/database.js";
import cors from "cors";
import bodyParser from "body-parser";
import adminRoutes from "./routes/admin.js";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";

const app = Express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(morgan());


// Directory name
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// @@ static routes
app.use('/backend/images', Express.static(path.join(__dirname, 'images')));

app.use("/api/admin", adminRoutes);

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




