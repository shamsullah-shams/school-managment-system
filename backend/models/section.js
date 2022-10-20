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
    },
    className: {
        type: DataTypes.STRING,
    },
    teacher: {
        type: DataTypes.STRING,
    },
});


export default Section;