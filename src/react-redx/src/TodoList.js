import React,{Component} from 'react';
import {connect} from 'react-redux';
// 引入action仓库
import {getNameChangeAction, getSexChangeAction,getAgeChangeAction,getHobbyChangeAction,getAddItemAction,getDeleteItemAction, getTodoList,getInitList} from './store/actionCreator';
import './style.css';
// import axios from 'axios';
import store from './store';

class TodoList extends Component{

  componentDidMount() {
    // thunk
    // const action = getTodoList();
    // store.dispatch(action);
    // console.log(action);

    // axios.get('./list.js')
    // .then((res)=>{
    //   const data = res.data;
    //   const action = initListAction(data);
    //   store.dispatch(action);
    //   console.log('请求成功',action);
    // })
    // .catch(()=>{
    //   console.log('请求失败');
    // })

    // saga
    const action = getInitList();
    store.dispatch(action);
    console.log(action);

  }

  render(){
    // const { inputValue,changeInputValue,handleClick,list } = this.props;
    // console.log(this.props);
    return(
      <div>
        <div className="wrapper">
          <div>
            <input type="text" value={this.props.nameValue} onChange={this.props.changeNameValue} placeholder='姓名'/><br />
            <input type="text" value={this.props.sexValue} onChange={this.props.changeSexValue} placeholder='性别'/><br />
            <input type="text" value={this.props.ageValue} onChange={this.props.changeAgeValue} placeholder='年龄'/><br />
            <input type="text" value={this.props.hobbyValue} onChange={this.props.changeHobbyValue} placeholder='爱好'/><br />
            <button onClick={this.props.handleClick}>提交</button>
          </div>
          <ul>
            {
              this.props.list.map((item,index)=>{
                return (
                  <li key={index} className="list">
                    姓名：{item.name}<br />
                    性别：{item.sex}<br />
                    年龄：{item.age}<br />
                    爱好：{item.hobby}<br />
                    <button onClick={this.props.handleClickDelete.bind(this,index)} className="btnDel">删除</button>
                  </li>
                )
              })
            }
          </ul>
        </div>
      </div>
    )
  }

}

// connect 第一个参数
// 连接的规则,把store里的数据映射给这个组件,变成这个组件的props
// state是store里的数据
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    nameValue:state.nameValue,
    sexValue:state.sexValue,
    ageValue:state.ageValue,
    hobbyValue:state.hobbyValue,
    list:state.list
  }
}

// connect 第二个参数
// 相当于store.dispatch
const mapDispatchToProps = (dispatch) => {
  return {
    changeNameValue(e) {
      // const action = {
      //   type:'changeNameVal',
      //   value:e.target.value
      // };

      // 拆分上面步骤
      const action = getNameChangeAction(e.target.value);
      dispatch(action);
    },
    changeSexValue(e) {
      const action = getSexChangeAction(e.target.value);
      dispatch(action);
    },
    changeAgeValue(e) {
      const action = getAgeChangeAction(e.target.value);
      dispatch(action);
    },
    changeHobbyValue(e) {
      const action = getHobbyChangeAction(e.target.value);
      dispatch(action);
    },

    handleClick() {
      const action = getAddItemAction();
      dispatch(action);
    },

    handleClickDelete() {
      const action = getDeleteItemAction();
      dispatch(action);
    }
  }
}

// mapStateToProps：让TodoList和store做关联,store里的数据会映射到组件里的props上面
// mapDispatchToProps：store.dispatch,把store的dispatch方法挂载到props上面
// connect前两个参数是连接的规则,第三个参数指和哪个组件做连接
export default connect(mapStateToProps,mapDispatchToProps)(TodoList);