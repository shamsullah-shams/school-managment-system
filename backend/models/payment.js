import { DataTypes, DATE } from "sequelize";
import sequelize from "../config/database.js";


const Payment = sequelize.define("Payment", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    className: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    amount: {
        type: DataTypes.DOUBLE,
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    year: {
        type: DataTypes.STRING,
        allowNull: false,
    }
});


export default Payment;