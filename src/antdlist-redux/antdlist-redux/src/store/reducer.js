import {iptNameVal,iptSexVal,iptAgeVal,iptHobbyVal,add_msg_item,del_todo_item} from './actionTypes';

// 数据
const dafaultState = {
  nameVal:'',
  sexVal:'',
  ageVal:'',
  hobbyVal:'',
  list:[
    {
      name: "张三",
      sex: "男",
      age:19,
      hobby:"读书"
    },
    {
      name: "李四",
      sex: "男",
      age:25,
      hobby:"读书"
    }
  ],
};

// 创建记录本
// state存放整个仓库的数据,action接收动作
// reducer 可以接收state,但是绝不能修改state
export default (state = dafaultState,action) =>{
  // state指store上次存储的数据,action指用户传递过来的数据
  if(action.type === iptNameVal){
    // 拷贝一份之前的数据
    const newState = JSON.parse(JSON.stringify(state));
    newState.nameVal = action.value;
    // 返回最新存储的数据
    return newState;
  }
  if(action.type === iptSexVal){
    const newState = JSON.parse(JSON.stringify(state));
    newState.sexVal = action.value;
    return newState;
  }
  if(action.type === iptAgeVal){
    const newState = JSON.parse(JSON.stringify(state));
    newState.ageVal = action.value;
    return newState;
  }
  if(action.type === iptHobbyVal){
    const newState = JSON.parse(JSON.stringify(state));
    newState.hobbyVal = action.value;
    return newState;
  }
  
  // 添加
  if(action.type === add_msg_item){
    const newState = JSON.parse(JSON.stringify(state));
    console.log(newState);
    newState.list.push({
      name:newState.nameVal,
      sex:newState.sexVal,
      age:newState.ageVal,
      hobby:newState.hobbyVal,
    });
    newState.nameVal = '';
    newState.sexVal = '';
    newState.ageVal = '';
    newState.hobbyVal = '';
    // 返回最新存储的数据
    return newState;
  }

  // 删除
  if(action.type === del_todo_item){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index,1);
    return newState;
  }

  return state;
}