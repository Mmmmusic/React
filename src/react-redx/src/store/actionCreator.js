// import { iptNameVal, iptSexVal, iptAgeVal, iptHobbyVal, add_msg_item, del_todo_item, init_list_action,get_init_list } from "./actionTypes";
import axios from 'axios';

export const actionTypes = {
  // 拆分action便于错误定位
  iptNameVal : 'changeNameVal',
  iptSexVal : 'changeSexVal',
  iptAgeVal : 'changeAgeVal',
  iptHobbyVal : 'changeHobbyVal',
  add_msg_item : 'addMsg',
  del_todo_item : 'delMsg',
  // thunk
  init_list_action : 'init_list_action',
  // saga
  get_init_list : 'get_init_list',
}

export const getNameChangeAction = (value) => ({
  type:actionTypes.iptNameVal,
  value
});
export const getSexChangeAction = (value) => ({
  type:actionTypes.iptSexVal,
  value
});
export const getAgeChangeAction = (value) => ({
  type:actionTypes.iptAgeVal,
  value
});
export const getHobbyChangeAction = (value) => ({
  type:actionTypes.iptHobbyVal,
  value
});

export const getAddItemAction = () => ({
  type:actionTypes.add_msg_item,
});
export const getDeleteItemAction = (index) => ({
  type:actionTypes.del_todo_item,
  index
});

// thunk
export const initListAction = (data) => ({
  type:actionTypes.init_list_action,
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
  type:actionTypes.get_init_list,
})

