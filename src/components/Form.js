import React, {useState} from 'react';

export default function Form(props) {
  const [name, setName] = useState('');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === '') {
      alert("任务不能为空");
    }
    props.addTask(name);
    setName("");
  };

  return (
    <form onSubmit={handleSubmit}>
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
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn_primary btn_lg">
        添加任务
      </button>
    </form>
  );
}