import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST__ITEM} from "./actionTypes"
const defaultState={
    // inputValue:"123",
    // list:[1,2,3]
    inputValue:"",
    list:[]
}

//reducer能够接受state，但是绝不能修改state,所以需要拷贝成
//纯函数指的是，给定固定的输入就一定会有固定的输出，而且不会有任何副作用
export default (state=defaultState,action)=>{
    if(action.type===CHANGE_INPUT_VALUE){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue=action.value;
        return newState;    //newState实际返回给了store
    }
    if(action.type===ADD_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue="";
        return newState;    //newState实际返回给了store
    }
    if(action.type===DELETE_TODO_ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;    //newState实际返回给了store
    }
    if(action.type===INIT_LIST__ITEM){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list=action.data;
        return newState;    //newState实际返回给了store
    }
    return state    //state里面存放的是所有store仓库里所有数据
}