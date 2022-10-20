import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";



const Subject = sequelize.define("Subject", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
    },
    shortName: {
        type: DataTypes.STRING,
    },
    teacher: {
        type: DataTypes.STRING,
    },
    className: {
        type: DataTypes.STRING,
    },
});


export default Subject;