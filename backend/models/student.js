import { DataTypes } from "sequelize";
import sequelize from "../config/database.js";


const Student = sequelize.define("Student", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    fullName: {
        type: DataTypes.STRING,
    },
    address: {
        type: DataTypes.STRING,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
    gender: {
        type: DataTypes.STRING,
    },
    phone: {
        type: DataTypes.STRING,
    },
    dateOfBirth: {
        type: DataTypes.STRING,
    },
    nationality: {
        type: DataTypes.STRING,
    },
    state: {
        type: DataTypes.STRING,
    },
    bloodGroup: {
        type: DataTypes.STRING,
    },
    imageUrl: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    parent: {
        type: DataTypes.STRING,
    },
    className: {
        type: DataTypes.STRING,
    },
    section: {
        type: DataTypes.STRING,
    },
    addmissionNo: {
        type: DataTypes.STRING,
    }
});



export default Student;