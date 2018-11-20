import React,{Component} from 'react';
import 'antd/dist/antd.css';
import { Input,Button,List } from 'antd';
import store from './store/index.js';

class TodoList extends Component{

  constructor(props){
    super(props);
    // 获取store里的数据
    this.state = store.getState();
    this.ipt = this.ipt.bind(this);
    this.storeChange = this.storeChange.bind(this);
    // 当store里数据改变时,执行该方法
    store.subscribe(this.storeChange);
    this.btnClick = this.btnClick.bind(this);
  }

  render(){
    return (
      <div style={{marginTop:'10px',marginLeft:'10px'}}>
        <div>
          <Input 
            value={this.state.iptVal}
            placeholder="todo info" 
            style={{width:'300px',marginRight:'6px'}} 
            onChange={this.ipt}
          />
          <Button type="primary" onClick={this.btnClick}>提交</Button>
        </div>
        <List
          style={{marginTop:'10px',width:'300px'}}
          bordered
          dataSource={this.state.list}
          renderItem={item => (<List.Item>{item}</List.Item>)}
        />
      </div>
    )
  }

  ipt(e){
    // 需要做的事,创建一个action
    const action = {
      type:'change_ipt_value',
      value:e.target.value,
    }
    // 用dispatch传递action
    store.dispatch(action);
  }

  // store发生变化时执行
  storeChange(){
    // console.log("change");

    // 重新去store里取数据,调用setStae替换掉当前组件里的数据
    this.setState(store.getState());
  }

  btnClick(){
    const action = {
      // type字段必填,告诉store你要做什么
      type:'add_todo_item',
    };
    store.dispatch(action);
  }

}

export default TodoList;