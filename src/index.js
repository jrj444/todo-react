import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

const DATA = [
  {id: "todo-0", name: "吃饭", completed: true},
  {id: "todo-1", name: "睡觉", completed: false},
  {id: "todo-2", name: "学习", completed: false}
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA}/>
  </React.StrictMode>,
  document.getElementById('root')
);
