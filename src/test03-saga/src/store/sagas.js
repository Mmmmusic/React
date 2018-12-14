import {GET_INIT_LIST} from "./actionTypes";
import {put, takeEvery} from "redux-saga/effects";
import axios from "axios";   //异步请求调用
import {initListAction} from "./actionCreators";

//generator函数
function* getInitList(){
    try{
        const data=yield axios.get("./list.php");
        const action = initListAction(data);
        yield put(action);
    }catch(e){
        console.log("网络请求失败")
    }
    // const data=yield axios.get("./list.php");
    // const action = initListAction(data);
    // yield put(action);
}
function* mySage(){
    //第一个参数为action的类型
    yield takeEvery(GET_INIT_LIST, getInitList)
}
export default mySage;