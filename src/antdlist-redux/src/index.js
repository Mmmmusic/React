import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import {Provider} from 'react-redux';
import store from './store';

// Provider 是react-redux 下的第一个核心参数,作为容器组件用来接收store,并且Provide下的所有子组件都可以调用store
ReactDOM.render(
  <Provider store={store}>
    <Router /> 
  </Provider>, 
  document.getElementById('root')
);
