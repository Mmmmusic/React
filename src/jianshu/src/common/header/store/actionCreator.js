// 引入命名文件
import * as constants from './actionTypes';
// immutable 数据统一格式
import {fromJS} from 'immutable';
import axios from 'axios';

// 不需要暴露出去,是自己用的
const changeList = (data) => ({
  type:constants.change_list,
  // 把action里的data也转化成immutable数组
  data:fromJS(data),
  totalPage:Math.ceil(data.length / 10)
})

// 转发index派发的action
// 需要暴露出去,给别人用的
export const searchFocus = () => ({
  type:constants.search_focus
});
export const searchBlur = () => ({
  type:constants.search_blur
});
export const mouseEnter = () => ({
  type:constants.mouse_enter
});
export const mouseLeave = () => ({
  type:constants.mouse_leave
});
export const changePage = (page) => ({
  type:constants.change_page,
  page:page
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