// 入口文件
import React from 'react';  // JSX依赖
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import './style.css';

// 把相应的组件挂载到某个节点下
ReactDOM.render(
  // JSX语法需要引入React
  // 标签以大写开头,一般就是一个react组件
  <TodoList />,
  document.getElementById('root'),
); 