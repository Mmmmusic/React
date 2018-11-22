import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import {Provider} from 'react-redux';
import store from './store';

// Provider:React-redux的第一个核心参数,把store提供给在其内部的每一个组件
const App = (
  <Provider store={store}>
    <TodoList /> 
  </Provider>
);

ReactDOM.render(App, document.getElementById('root'));
