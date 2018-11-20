import {change_ipt_value,add_todo_item,del_todo_item} from './actionTypes';

// 数据
const dafaultState = {
  iptVal:'',
  list:[],
};

// 创建记录本
// state存放整个仓库的数据,action接收动作
// reducer 可以接收state,但是绝不能修改state
export default (state = dafaultState,action) =>{
  // state指store上次存储的数据,action指用户传递过来的数据
  if(action.type == change_ipt_value){
    // 拷贝一份之前的数据
    const newState = JSON.parse(JSON.stringify(state));
    newState.iptVal = action.value;
    // 返回最新存储的数据
    return newState;
  }
  
  // 添加
  if(action.type == add_todo_item){
    if(state.iptVal !== ''){
      const newState = JSON.parse(JSON.stringify(state));
      console.log(newState);
      newState.list.push(newState.iptVal);
      newState.iptVal = '';
      // 返回最新存储的数据
      return newState;
    }
  }

  // 删除
  if(action.type == del_todo_item){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index,1);
    return newState;
  }

  // console.log(state,action);
  // 返回最新存储的数据
  return state;
}