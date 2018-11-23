import { takeEvery, put } from 'redux-saga/effects'; 
import {get_init_list} from './actionTypes';
import {initListAction} from './actionCreator';
import axios from 'axios';

// 把异步函数放在这里管理
// generator
function* maSaga() {
  // 这里可以接收reducer里的action
  // 去捕获每一次action类型
  // 只要捕捉到get_init_list,就会去执行getInitList方法
  yield takeEvery(get_init_list,getInitList);
} 

function* getInitList() {
  // generator 捕获异常
  try {
    const res = yield axios.get('./list.js');
    const action = initListAction(res.data);
    yield put(action);
    console.log('请求成功',action);
  }catch(e){
    console.log('请求失败',e);
  }

  // axios.get('./list.js')
  // .then((res)=>{
  //   const data = res.data;
  //   const action = initListAction(data);
  //   put(action);
  //   console.log('请求成功',action);
  // })
  // .catch(()=>{
  //   console.log('请求失败');
  // })
  
}

export default maSaga;