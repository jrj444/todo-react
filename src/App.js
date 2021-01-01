import Todo from './components/Todo';

function App(props) {
  const taskList = props.tasks.map(task =>
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
    />
  );

  return (
    <div className="todoapp stack-large">
      <h1>待办清单</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label_lg">
            需要做些什么？
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input_lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn_primary btn_lg">
          添加任务
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span>All</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span>Active</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span>Completed</span>
        </button>
      </div>
      <h2 id="list-heading">
        3 tasks remaining
      </h2>
      <ul
        className="todo-list stack-large stack-exception"
      >
        {taskList}
      </ul>
    </div>
  );
}

export default App;
