import {fromJS} from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  login:false,
});

export default (state=defaultState,action) => {
  switch(action.type){
    case constants.change_login:
      return state.set('login',action.value);
    case constants.Logout:
      return state.set('login',action.value);
    default:
      return state;
  }
}