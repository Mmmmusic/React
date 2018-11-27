import {combineReducers} from 'redux';
// 起别名,header下的store文件夹的index是reducer的出口文件
import {reducer as headerReducer} from '../common/header/store';
import {reducer as homeReducer} from '../pages/home/store';
import {reducer as detailReducer} from '../pages/detail/store';
import {reducer as loginReducer} from '../pages/login/store';

// 合并小的reducer
const reducer = combineReducers({
  header:headerReducer,
  home:homeReducer,
  detail:detailReducer,
  login:loginReducer
});

export default reducer;
