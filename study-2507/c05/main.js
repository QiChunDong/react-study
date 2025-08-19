function MyApp() {
  const [tasks, setTasks] = React.useState([]);
  const [newTask, setNewTask] = React.useState("");

  const [id, setId] = React.useState(0);
  function addNewTask() {
    setTasks([
      ...tasks,
      {
        id: id,
        text: newTask,
        checked: false,
      },
    ]);
    setId(id + 1);
  }

  function changeTask(task, e) {
    const newTasks = tasks
      .map((t) => {
        if (t.id === task.id) {
          t.checked = e.target.checked;
        }
        return t;
      })
      .sort((a, b) => a.checked - b.checked);
    setTasks(newTasks);
  }

  function deleteTask(task) {
    setTasks(tasks.filter((t) => t.id !== task.id));
  }

  return (
    <main>
      <div className="input-wrapper">
        <input value={newTask} onChange={(e) => setNewTask(e.target.value)} />
        <button onClick={addNewTask}>添加</button>
      </div>
      {tasks.map((task) => (
        <div>
          <input
            type="checkbox"
            checked={task.checked}
            onChange={(e) => changeTask(task, e)}
          ></input>
          <span className={task.checked ? "checked" : ""}>{task.text}</span>
          <button onClick={() => deleteTask(task)}>删除</button>
        </div>
      ))}
    </main>
  );
}

const appEl = document.querySelector("#app");
const root = ReactDOM.createRoot(appEl);

root.render(<MyApp />);
