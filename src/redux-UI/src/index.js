import React from 'react';
import ReactDOM from 'react-dom';
import TodoList from './TodoList';
import {Provider} from 'react-redux';
import store from './store';

// Provider 提供器连接了store,把store提供给它下面的所有组件
// 内部组件都可以去获取store里的内容  // todolist可以获取store的内容

const App = (
  <Provider store={store}>
    <TodoList />
  </Provider>
);

ReactDOM.render(
  <App/>, 
  document.getElementById('root')
);
