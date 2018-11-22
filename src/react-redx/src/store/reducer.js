import { iptNameVal, iptSexVal, iptAgeVal, iptHobbyVal, add_msg_item, del_todo_item } from "./actionTypes";

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

export default (state=data,aciton)=>{
  if(aciton.type === iptNameVal){
    const newState = JSON.parse(JSON.stringify(state));
    newState.nameValue = aciton.value;
    return newState;
  }
  if(aciton.type === iptSexVal){
    const newState = JSON.parse(JSON.stringify(state));
    newState.sexValue = aciton.value;
    return newState;
  }
  if(aciton.type === iptAgeVal){
    const newState = JSON.parse(JSON.stringify(state));
    newState.ageValue = aciton.value;
    return newState;
  }
  if(aciton.type === iptHobbyVal){
    const newState = JSON.parse(JSON.stringify(state));
    newState.hobbyValue = aciton.value;
    return newState;
  }

  if(aciton.type === add_msg_item){
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
  if(aciton.type === del_todo_item){
    const newState = JSON.parse(JSON.stringify(state));
    newState.list.splice(aciton.index,1);
    return newState;
  }

  return state;
}