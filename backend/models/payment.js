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
    },
    className: {
        type: DataTypes.STRING,
    },
    amount: {
        type: DataTypes.DOUBLE,
    },
    description: {
        type: DataTypes.STRING,
    },
    year: {
        type: DataTypes.STRING,
    }
});


export default Payment;