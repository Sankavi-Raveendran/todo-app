export default function TaskCard({ task, refresh }) {
  const markDone = async () => {
    await fetch(`http://localhost:4000/tasks/${task.id}/done`, {
      method: "PUT",
    });
    refresh();
  };

  return (
    <div className="task-card">
       <div className="task-info">
        <h3 className="task-title">{task.title}</h3>
        <p className="task-desc">{task.description}</p>
      </div>

      <div className="task-action">
    <button className="done-btn" onClick={markDone}>
      Done
    </button>
  </div>
    </div>
  );
}
