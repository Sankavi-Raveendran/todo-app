import { useEffect, useState } from "react";
import TaskCard from "./components/TaskCard";
import "./styles.css";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [form, setForm] = useState({ title: "", description: "" });

  const loadTasks = async () => {
    const res = await fetch("http://localhost:4000/tasks");
    setTasks(await res.json());
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const createTask = async (e) => {
    e.preventDefault();
    if (!form.title.trim()) return;

    await fetch("http://localhost:4000/tasks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setForm({ title: "", description: "" });
    loadTasks();
  };

  return (
    <div className="container">
      {/* Left side form */}
      <div className="left-panel">
        <h2>Add a Task</h2>

        <form onSubmit={createTask} className="task-form">
          <input
            className="input-field"
            placeholder="Title"
            required
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />

          <textarea
            className="textarea-field"
            placeholder="Description"
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />

          <div className="add-btn-wrapper">
  <button type="submit" className="add-btn">Add</button>
</div>

        </form>
      </div>

      <div className="divider"></div>

      {/* Right side tasks */}
      <div className="right-panel">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} refresh={loadTasks} />
        ))}
      </div>
    </div>
  );
}
