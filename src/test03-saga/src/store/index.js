//使用redux-thunk中间件，需要引入applyMiddleware
import { createStore , applyMiddleware,compose} from 'redux';
import reducer from "./reducer";   //reducer传入store数据
import createSagaMiddleware from 'redux-saga';     //引入中间件
import todoSagas from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers =window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
    }) : compose;

const enhancer = composeEnhancers(applyMiddleware(sagaMiddleware));

const store=createStore(
    reducer,
    enhancer
);

sagaMiddleware.run(todoSagas);

export default store;