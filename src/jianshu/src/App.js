import React, { Component } from 'react';
import {Provider} from 'react-redux';
import {BrowserRouter,Route} from 'react-router-dom';
// 公共组件
import Header from './common/header/index';
// 页面级组件
import Home from './pages/home';
// detail 是异步组件
import Detail from './pages/detail/loadable.js';
import Login from './pages/login';
import Write from './pages/write';
import Person from './pages/person';
// import './stactics/rem';
// reducer仓库
import store from './store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          {/* 
            BrowserRouter代表的是一个路由 
            Route代表的是一个个的路由规则
          */}
          <BrowserRouter>
            <div>
              <Header />
              <Route path='/' exact component={Home}></Route>
              <Route path='/login' exact component={Login}></Route>
              <Route path='/write' exact component={Write}></Route>
              <Route path='/detail/:id' exact component={Detail}></Route>
              <Route path='/person' exact component={Person}></Route>
            </div>
          </BrowserRouter>
        </div>
      </Provider>
    );
  }
}

export default App;
