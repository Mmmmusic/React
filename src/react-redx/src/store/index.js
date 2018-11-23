import {createStore,applyMiddleware,compose} from 'redux';
// 引入redux中间件redux-thunk
import reducer from './reducer';
// import thunk from 'redux-thunk';

// 引入saga
import createSagaMiddleware from 'redux-saga';
import todoSagas from './sagas';

// 创建saga中间件
const sagaMiddleware = createSagaMiddleware()

// 配置
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

// saga
const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

// thunk

// const enhancer = composeEnhancers(
//   applyMiddleware(thunk),
//   // other store enhancers if any
// );

const store = createStore(reducer,enhancer);

// 调用saga
sagaMiddleware.run(todoSagas);

export default store;