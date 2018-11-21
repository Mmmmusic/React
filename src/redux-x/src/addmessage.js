import React, { Component,Fragment } from 'react';
import store from "./store";    //引入store
import {getAddmessageAction,getInputNameAction,getInputGenderAction,getInputAgeAction,getInputHobbyAction} from "./store/actionCreators"

class Addmessage extends Component{
    constructor(props){
        super(props);
        this.state=store.getState()//获取store数据
        this.handleAddmessage=this.handleAddmessage.bind(this);//确认添加信息
        this.handleInputNameChange=this.handleInputNameChange.bind(this);
        this.handleInputGenderChange=this.handleInputGenderChange.bind(this);
        this.handleInputAgeChange=this.handleInputAgeChange.bind(this);
        this.handleInputHobbyChange=this.handleInputHobbyChange.bind(this);
        
        this.handleStoreChange=this.handleStoreChange.bind(this);//把数据提交给store
        store.subscribe(this.handleStoreChange);   //store发生变化时，执行该函数
    }
    render(){
        return(
            <Fragment>
                <div>
                    请输入新增信息
                </div>
                <div>
                    姓名：
                    <input
                        placeholder="姓名"
                        onChange={this.handleInputNameChange}
                        value={this.state.inputNameValue}
                    />
                </div>
                <div>
                性别：
                    <input
                        placeholder="性别"
                        onChange={this.handleInputGenderChange}
                        value={this.state.inputGenderValue}
                    />
                </div>
                <div>
                年龄：
                    <input
                        placeholder="年龄"
                        onChange={this.handleInputAgeChange}
                        value={this.state.inputAgeValue}
                    />
                </div>
                <div>
                爱好：
                    <input
                        placeholder="爱好"
                        onChange={this.handleInputHobbyChange}
                        value={this.state.inputHobbyValue}
                    />
                </div>
                <button onClick={this.handleAddmessage}>确认添加</button>
            </Fragment>
            
        )
    }
    handleAddmessage(){
        const action=getAddmessageAction()
        store.dispatch(action)
    }
    handleInputNameChange(e){
        const action=getInputNameAction(e.target.value);
        store.dispatch(action);
    }
    handleInputGenderChange(e){
        const action=getInputGenderAction(e.target.value);
        store.dispatch(action);
    }
    handleInputAgeChange(e){
        const action=getInputAgeAction(e.target.value);
        store.dispatch(action);
    }
    handleInputHobbyChange(e){
        const action=getInputHobbyAction(e.target.value);
        store.dispatch(action);
    }
    handleStoreChange(){
        this.setState(store.getState());
    }
}

export default Addmessage;
