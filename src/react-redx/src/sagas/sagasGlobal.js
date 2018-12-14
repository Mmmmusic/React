// 总文件
import {all} from 'redux-saga/effects';

import {todoListSaga} from '../store/todoListSaga';

function* rootSaga(){
  yield all([
    ...todoListSaga,
  ])
}

export default rootSaga;