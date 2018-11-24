// import {fromJs} from 'immutable';
// const defaultState = fromJs({
//   a:'props'
// });

const defaultState = {
  a:'props'
};

export default (state=defaultState,aciton) => {
  
  // if(action.type === a){
  //   // immutable 对象的set方法,会结合之前的immutable对象的值和设置的值,返回一个全新的对象
  //   return state.set('focused',true);
  // }
  return state;
}