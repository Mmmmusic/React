import {ADD_MESSAGE_VALUE,INPUT_NAME_VALUE,INPUT_GENDER_ITEM,INPUT_AGE_ITEM,INPUT_HOBBY_ITEM} from "./actionTypes"

const defaultState = {
  inputNameValue: "",
  inputGenderValue: "",
  inputAgeValue: "",
  inputHobbyValue: "",
  list: [
    {
      name: "Jerry",
      gender: "男",
      age: 20,
      hobby: "篮球"
    },
    {
      name: "Neil",
      gender: "男",
      age: 22,
      hobby: "跑步"
    }
  ]
};

//reducer能够接受state，但是绝不能修改state,所以需要拷贝成
//纯函数指的是，给定固定的输入就一定会有固定的输出，而且不会有任何副作用
export default (state = defaultState, action) => {
  //输入姓名
    if (action.type === INPUT_NAME_VALUE) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputNameValue = action.value;
        return newState; //newState实际返回给了store
    }
    if (action.type === INPUT_GENDER_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputGenderValue = action.value;
        return newState; //newState实际返回给了store
    }
    if (action.type === INPUT_AGE_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputAgeValue = action.value;
        return newState; //newState实际返回给了store
    }
    if (action.type === INPUT_HOBBY_ITEM) {
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputHobbyValue = action.value;
        return newState; //newState实际返回给了store
    }
    
    //提交数据到store
    if(action.type===ADD_MESSAGE_VALUE){
      const newState = JSON.parse(JSON.stringify(state));
      newState.list.push({
        name: newState.inputNameValue,
        gender: newState.inputGenderValue,
        age: newState.inputAgeValue,
        hobby: newState.inputHobbyValue
      });
      newState.inputNameValue="";
      newState.inputGenderValue="";
      newState.inputAgeValue="";
      newState.inputHobbyValue="";
      // console.log(newState)
      return newState;    //newState实际返回给了store
  }

  // console.log(state,action)
  return state; //state里面存放的是所有store仓库里所有数据
};
