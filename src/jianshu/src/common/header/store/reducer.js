import * as constants from './actionTypes';
import {fromJS} from 'immutable';
const defaultState = fromJS({
  focused:false,
  list:[]
});

// const defaultState = {
//   focused:false,
//   list:[]
// };

export default (state=defaultState,action) => {
  // 优化
  switch(action.type){
    case constants.search_focus:
      // 直接retrun出去的话,后面的代码不会执行,所以没用break
      return state.set('focused',true);
    case constants.search_blur:
      return state.set('focused',false);
    case constants.change_list:
      return state.set('list',action.data);
    default:
      return state;
  }

  // // 搜索框聚焦
  // if(action.type === constants.search_focus){
  //   // immutable 对象的set方法,会结合之前的immutable对象的值和设置的值,返回一个全新的对象
  //   return state.set('focused',true);
  // }
  // // 搜索框失焦
  // if(action.type === constants.search_blur){
  //   return state.set('focused',false);
  // }
  // // 拿数据
  // if(action.type === constants.change_list){
  //   // console.log(action);
  //   return state.set('list',action.data);
  // }

  // return state;
}