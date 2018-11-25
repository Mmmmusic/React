import * as constants from './actionTypes';
import {fromJS} from 'immutable';
import axios from 'axios';

// 不需要暴露出去,是自己用的
const changeList = (data) => ({
  type:constants.change_list,
  // 把action里的data也转化成immutable数组
  data:fromJS(data)
})

// 需要暴露出去,给别人用的
export const searchFocus = () => ({
  type:constants.search_focus
});
export const searchBlur = () => ({
  type:constants.search_blur
});

// 异步处理逻辑拆分到了actionCreator里
// action给到store,再给到reducer
export const getList = () => {
  return(dispatch) => {
    axios.get('/api/headerList.json')
    .then((res)=>{
      const data = res.data;
      dispatch(changeList(data.data));
    })
    .catch((err)=>{
      console.log('请求失败');
    })
  }
};