import React,{Component} from 'react';
import 'antd/dist/antd.css';
import { Input,Button } from 'antd';
// redux文件
import {connect} from 'react-redux';
import store from './store';
import './style.css'

// 引入actionCreator文件
import {getNameChangeAction, getSexChangeAction,getAgeChangeAction,getHobbyChangeAction,getAddItemAction} from './store/actionCreator';

class TodoList extends Component{

  constructor(props){
    console.log(store);
    super(props);
    // 获取store里的数据
    // this.state = store.getState();

    // 获取输入框值
    this.nameVal = this.nameVal.bind(this);
    this.sexVal = this.sexVal.bind(this);
    this.ageVal = this.ageVal.bind(this);
    this.hobbyVal = this.hobbyVal.bind(this);

    // this.storeChange = this.storeChange.bind(this);
    // 当store里数据改变时,执行该方法
    // store.subscribe(this.storeChange);

    // 添加按钮
    this.btnClick = this.btnClick.bind(this);
  }

  render(){
    console.log(this.props,store)
    return (
      <div style={{marginTop:'10px',marginLeft:'10px'}}>
        <div>
          <Input className="mar" 
            value={store.nameVal}
            placeholder="姓名" 
            style={{width:'300px',marginRight:'6px'}} 
            onChange={this.nameVal}
          /><br />
          <Input className="mar" 
            value={store.sexVal}
            placeholder="性别" 
            style={{width:'300px',marginRight:'6px'}} 
            onChange={this.sexVal}
          /><br />
          <Input className="mar" 
            value={store.ageVal}
            placeholder="年龄" 
            style={{width:'300px',marginRight:'6px'}} 
            onChange={this.ageVal}
          /><br />
          <Input className="mar" 
            value={store.hobbyVal}
            placeholder="爱好" 
            style={{width:'300px',marginRight:'6px'}} 
            onChange={this.hobbyVal}
          /><br />
          <Button type="primary" onClick={this.btnClick}>添加信息</Button>
        </div>
      </div>
    )
  }

  // 获取输入框值
  nameVal(e){
    // 需要做的事,创建一个action
    const action = getNameChangeAction(e.target.value);
    // 用dispatch传递action
    store.dispatch(action);
  }
  sexVal(e){
    const action = getSexChangeAction(e.target.value);
    store.dispatch(action);
  }
  ageVal(e){
    const action = getAgeChangeAction(e.target.value);
    store.dispatch(action);
  }
  hobbyVal(e){
    const action = getHobbyChangeAction(e.target.value);
    store.dispatch(action);
  }

  // store发生变化时执行
  // storeChange(){
  //   // 重新去store里取数据,调用setStae替换掉当前组件里的数据
  //   this.setState(store.getState());
  // }

  btnClick(){
    const action = getAddItemAction();
    store.dispatch(action);
  }

}

export default connect()(TodoList);