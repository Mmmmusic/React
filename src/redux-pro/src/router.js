import React,{Fragment} from 'react';
import {HashRouter,Route,Switch} from 'react-router-dom';
import App from './App';
import Infolist from './Infolist';

const Router = () => (
  <Fragment>
    <div className="route">
      <a href="http://localhost:3000/#/">主页</a>
      <a href="http://localhost:3000/#/list">列表页</a>
    </div>
    <HashRouter>
      <Switch>
        <Route exact path="/" component={App}> </Route>
        <Route exact path="/list" component={Infolist}> </Route>
      </Switch>
    </HashRouter>
  </Fragment>
)

export default Router;