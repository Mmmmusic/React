import { iptNameVal, iptSexVal, iptAgeVal, iptHobbyVal, add_msg_item, del_todo_item,init_list_action } from "./actionTypes";

const data = {
  nameValue:'',
  sexValue:'',
  ageValue:'',
  hobbyValue:'',
  list:[
    {
      name:'张三',
      sex:'男',
      age:25,
      hobby:'读书'
    },
    {
      name:'李四',
      sex:'男',
      age:24,
      hobby:'读书'
    },
  ]
}

export default (state=data,action)=>{
  if(action.type === iptNameVal){
    const newState = JSON.parse(JSON.stringify(state));
    newState.nameValue = action.value;
    return newState;
  }
  if(action.type === iptSexVal){
    const newState = JSON.parse(JSON.stringify(state));
    newState.sexValue = action.value;
    return newState;
  }
  if(action.type === iptAgeVal){
    const newState = JSON.parse(JSON.stringify(state));
    newState.ageValue = action.value;
    return newState;
  }
  if(action.type === iptHobbyVal){
    const newState = JSON.parse(JSON.stringify(state));
    newState.hobbyValue = action.value;
    return newState;
  }

  if(action.type === add_msg_item){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.unshift(
      {
        name:newState.nameValue,
        sex:newState.sexValue,
        age:newState.ageValue,
        hobby:newState.hobbyValue,
      }
    );
    newState.nameValue = '';
    newState.sexValue = '';
    newState.ageValue = '';
    newState.hobbyValue = '';
    return newState;
  }
  if(action.type === del_todo_item){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(action.index,1);
    return newState;
  }

  // thunk
  if(action.type === init_list_action){
    const newState = JSON.parse(JSON.stringify(state));
    // newState.list.push(action.data);
    console.log(action.data);
    return newState;
  }

  // saga

  return state;
}