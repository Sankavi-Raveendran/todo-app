import express from "express";
import { createTask, getRecentTasks, markAsDone } from "../controllers/taskController.js";

const router = express.Router();

router.post("/", createTask);
router.get("/", getRecentTasks);
router.put("/:id/done", markAsDone);

export default router;
