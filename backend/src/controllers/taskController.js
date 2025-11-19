import Task from "../models/task.js";

export const createTask = async (req, res) => {
  const { title, description } = req.body;

  const task = await Task.create({ title, description });
  res.status(201).json(task);
};

export const getRecentTasks = async (req, res) => {
  const tasks = await Task.findAll({
    where: { completed: false },
    order: [["createdAt", "ASC"]],
    limit: 5
  });
  res.json(tasks);
};

export const markAsDone = async (req, res) => {
  const { id } = req.params;
  const task = await Task.findByPk(id);

  if (!task) return res.status(404).json({ message: "Task not found" });

  task.completed = true;
  await task.save();

  res.json({ message: "Task completed" });
};
