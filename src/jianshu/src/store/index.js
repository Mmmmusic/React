import {createStore,compose,applyMiddleware} from 'redux';
// 中间件存在于action和store之间,是对dispatch的升级
import thunk from 'redux-thunk';
import reducer from './reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer,composeEnhancers(
  // applyMiddleware方法主要是对redux的dispatch方法进行封装
  applyMiddleware(thunk)
));

export default store;