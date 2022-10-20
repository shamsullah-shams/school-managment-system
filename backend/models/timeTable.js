import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";

const TimeTable = sequelize.define("TimeTable", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
    },
    className: {
        type: DataTypes.STRING,
    },
    type: {
        type: DataTypes.STRING,
    },
    year: {
        type: DataTypes.STRING,
    }
});


export default TimeTable;