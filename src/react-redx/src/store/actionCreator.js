import { iptNameVal, iptSexVal, iptAgeVal, iptHobbyVal, add_msg_item, del_todo_item, init_list_action,get_init_list } from "./actionTypes";
import axios from 'axios';

export const getNameChangeAction = (value) => ({
  type:iptNameVal,
  value
});
export const getSexChangeAction = (value) => ({
  type:iptSexVal,
  value
});
export const getAgeChangeAction = (value) => ({
  type:iptAgeVal,
  value
});
export const getHobbyChangeAction = (value) => ({
  type:iptHobbyVal,
  value
});

export const getAddItemAction = () => ({
  type:add_msg_item,
});
export const getDeleteItemAction = (index) => ({
  type:del_todo_item,
  index
});

// thunk
export const initListAction = (data) => ({
  type:init_list_action,
  data
});

// 使用redux-thunk后,action可以写成函数
export const getTodoList = () => {
  return (dispatch) => {
    axios.get('./list.js')
    .then((res)=>{
      const data = res.data;
      const action = initListAction(data);
      dispatch(action);
      console.log('请求成功',data);
    })
    .catch(()=>{
      console.log('请求失败');
    })
  }
}

// saga
export const getInitList = () => ({
  type:get_init_list,
})

