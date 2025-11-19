import { DataTypes } from "sequelize";
import sequelize from "../database.js";

const Task = sequelize.define("Task", {
  title: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
  completed: { type: DataTypes.BOOLEAN, defaultValue: false }
});

export default Task;
