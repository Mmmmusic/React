import {CHANGE_INPUT_VALUE,ADD_TODO_ITEM,DELETE_TODO_ITEM,INIT_LIST__ITEM,GET_INIT_LIST} from "./actionTypes";

export const getInputChangeAction=(value)=>({
    type:CHANGE_INPUT_VALUE,
    value
});
export const getAddItemAction=()=>({
    type:ADD_TODO_ITEM
});
export const getDeleteItemAction=(value)=>({
    type:DELETE_TODO_ITEM,
    value
});
export const initListAction=(data)=>({
    type:INIT_LIST__ITEM,
    data
});
export const getInitList=()=>({
    type:GET_INIT_LIST
});