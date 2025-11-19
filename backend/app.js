import express from "express";
import cors from "cors";
import sequelize from "./src/database.js";
import taskRoutes from "./src/routes/taskRoutes.js";
import Task from "./src/models/task.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/tasks", taskRoutes);

export const initDb = async () => {
  await sequelize.sync({ alter: true });
};

export default app;
