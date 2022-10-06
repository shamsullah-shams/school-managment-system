import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";


const Classes = sequelize.define("Class", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    className: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: false,
    },
    classType: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});



export default Classes;