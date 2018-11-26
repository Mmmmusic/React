import React,{Component} from 'react';
import 'antd/dist/antd.css';
import { Input,Button } from 'antd';
// redux文件
import {connect} from 'react-redux';
import axios from 'axios';
import './style.css';

// 引入actionCreator文件
import {getNameChangeAction, getSexChangeAction,getAgeChangeAction,getHobbyChangeAction,getAddItemAction} from './store/actionCreator';

class TodoList extends Component{

  // constructor(props){
    // console.log(store);
    // super(props);
    // 获取store里的数据
    // this.state = store.getState();

    // 获取输入框值
    // this.nameVal = this.nameVal.bind(this);
    // this.sexVal = this.sexVal.bind(this);
    // this.ageVal = this.ageVal.bind(this);
    // this.hobbyVal = this.hobbyVal.bind(this);

    // this.storeChange = this.storeChange.bind(this);
    // 当store里数据改变时,执行该方法
    // store.subscribe(this.storeChange);

    // 添加按钮
    // this.btnClick = this.btnClick.bind(this);
  // }

  // 请求数据
  componentDidMount(){
    axios.get('/list.json').then((res)=>{
        console.log(res,'请求成功');
    })
    .catch(()=>{
      console.log('请求失败');
    })
  }

  render(){
    // console.log(this.props,store)
    return (
      <div style={{marginTop:'10px',marginLeft:'10px'}}>
        <div>
          <Input className="mar" 
            value={this.props.nameVal}
            placeholder="姓名" 
            style={{width:'300px',marginRight:'6px'}} 
            onChange={this.props.changeNameValue}
          /><br />
          <Input className="mar" 
            value={this.props.sexVal}
            placeholder="性别" 
            style={{width:'300px',marginRight:'6px'}} 
            onChange={this.props.changeSexValue}
          /><br />
          <Input className="mar" 
            value={this.props.ageVal}
            placeholder="年龄" 
            style={{width:'300px',marginRight:'6px'}} 
            onChange={this.props.changeAgeValue}
          /><br />
          <Input className="mar" 
            value={this.props.hobbyVal}
            placeholder="爱好" 
            style={{width:'300px',marginRight:'6px'}} 
            onChange={this.props.changeHobbyValue}
          /><br />
          <Button type="primary" onClick={this.props.btnClick}>添加信息</Button>
        </div>
      </div>
    )
  }
}

// conncet 第一个参数 mapStateToProps ,让当前组件和store做关联,store里的数据会映射到当前组件的props里

const mapStateToProps = (state) => {
  // console.log(state);
  return {
    nameVal:state.nameVal,
    sexVal:state.sexVal,
    ageVal:state.ageVal,
    hobbyVal:state.hobbyVal
  }
}

// connect 第二个参数 mapDispatchToProps ,派发action
const mapDispatchToProps = (dispatch) => {
  return{
    // 获取输入框值
    changeNameValue(e){
      // 需要做的事,创建一个action
      const action = getNameChangeAction(e.target.value);
      // 用dispatch传递action给reducer
      dispatch(action);
    },
    changeSexValue(e){
      const action = getSexChangeAction(e.target.value);
      dispatch(action);
    },
    changeAgeValue(e){
      const action = getAgeChangeAction(e.target.value);
      dispatch(action);
    },
    changeHobbyValue(e){
      const action = getHobbyChangeAction(e.target.value);
      dispatch(action);
    },
    btnClick(){
      const action = getAddItemAction();
      dispatch(action);
    }
  }
}

// conncet两个常用参数：
  // 01 mapStateToProps = (state) => {} 映射store到props
  // 02 mapDispatchToProps = (dispatch) => {} 派发action
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);