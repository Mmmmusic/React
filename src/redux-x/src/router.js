
import React,{Fragment} from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import HomePage from './homepage';
import Addmessage from './addmessage';


const Router = () => (
    <Fragment>
        <a href='http://localhost:3000/#/'><button>主页</button></a>
        <a href='http://localhost:3000/#/add'><button>添加信息</button></a>

        <HashRouter>
            <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/add" component={Addmessage}/>
            </Switch>
        </HashRouter>
    </Fragment>
    
);


export default Router;
