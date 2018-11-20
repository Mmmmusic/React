// 数据
const dafaultState = {
  iptVal:'123',
  list:[1,2],
};

// 创建记录本
// state存放整个仓库的数据,action接收动作
// reducer 可以接收state,但是绝不能修改state
export default (state = dafaultState,action) =>{
  // state指store上次存储的数据,action指用户传递过来的数据
  if(action.type == 'change_ipt_value'){
    // 拷贝一份之前的数据
    const newState = JSON.parse(JSON.stringify(state));
    newState.iptVal = action.value;
    // 返回最新存储的数据
    return newState;
  }
  
  if(action.type == 'add_todo_item'){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.push(newState.iptVal);
    newState.iptVal = '';
    console.log(newState);
    // 返回最新存储的数据
    return newState;
  }
  // console.log(state,action);
  // 返回最新存储的数据
  return state;
}