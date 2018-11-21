import {createStore} from 'redux';
import reducer from "./reducer";   //reducer传入store数据

const store=createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;