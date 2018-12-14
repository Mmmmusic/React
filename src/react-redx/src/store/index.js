import {createStore,applyMiddleware,compose} from 'redux';
import reducer from './reducer';
import rootSaga from '../sagas/sagasGlobal';

// 引入saga
import createSagaMiddleware from 'redux-saga';
// import todoSagas from './todoListSaga';

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
sagaMiddleware.run(rootSaga);

export default store;