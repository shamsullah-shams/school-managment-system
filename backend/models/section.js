import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";



const Section = sequelize.define("Section", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    className: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    teacher: {
        type: DataTypes.STRING,
        allowNull: false,
    },
});


export default Section;