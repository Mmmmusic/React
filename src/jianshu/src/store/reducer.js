import {combineReducers} from 'redux';
// 起别名,header下的store文件夹的index是reducer的出口文件
import {reducer as headerReducer} from '../common/header/store';

const reducer = combineReducers({
  header:headerReducer
});

export default reducer;
