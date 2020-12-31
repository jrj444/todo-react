function App(props) {
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
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-0" type="checkbox" defaultChecked={true} />
            <label className="todo-label" htmlFor="todo-0">
              吃饭
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit
            </button>
            <button type="button" className="btn btn_danger">
              Delete
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-1" type="checkbox" />
            <label className="todo-label" htmlFor="todo-1">
              睡觉
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit
            </button>
            <button type="button" className="btn btn__danger">
              Delete
            </button>
          </div>
        </li>
        <li className="todo stack-small">
          <div className="c-cb">
            <input id="todo-2" type="checkbox" />
            <label className="todo-label" htmlFor="todo-2">
              学习
            </label>
          </div>
          <div className="btn-group">
            <button type="button" className="btn">
              Edit
            </button>
            <button type="button" className="btn btn__danger">
              Delete
            </button>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default App;
