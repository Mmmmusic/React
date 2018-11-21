import React, { Component ,Fragment} from 'react';
import store from "./store";    //引入store

class HomePage extends Component{
    constructor(props){
        super(props);
        this.state=store.getState();
    }
    render(){
        return(
            <Fragment>
                <div>
                    个人信息
                </div>
                <ul>
                    {this.getTodoItem()}
                </ul>
            </Fragment>
        )
    }
    getTodoItem(){
        return (this.state.list.map((item,index)=>{
            return (
                <li key={index}>
                    <p>姓名：{item.name}</p>
                    <p>性别：{item.gender}</p>
                    <p>年龄：{item.age}</p>
                    <p>爱好：{item.hobby}</p>
                </li>
            )
        }))
    }
}

export default HomePage;
