import {fromJS} from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  person:false,
});

export default (state=defaultState,action) => {
  switch(action.type){
    case constants.change_show:
      return state.set('person',action.value);
    case constants.change_hide:
      return state.set('person',action.value);
    default:
      return state;
  }
}