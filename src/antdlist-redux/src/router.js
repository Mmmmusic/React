import React,{Fragment} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import {Button } from 'antd';
import 'antd/dist/antd.css';
import './style.css';
import ShowList from './ShowList';
import TodoList from './TodoList';

const Router = () => (
    <Fragment>

      <a href='http://localhost:3001/#/'><Button className="mar mar-all">主页</Button></a>
      <a href='http://localhost:3001/#/add'><Button className="mar mar-all">添加信息</Button></a>

      <HashRouter>
        <Switch>
          <Route exact path="/" component={ShowList}/>
          <Route exact path="/add" component={TodoList}/>
        </Switch>
      </HashRouter>
      
    </Fragment>
);

export default Router;
