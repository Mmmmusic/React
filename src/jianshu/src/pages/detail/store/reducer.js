import {fromJS} from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  title:'',
  content:'',
});

export default (state=defaultState,action) => {
  switch(action.type){
    case constants.change_detail:
      return state.merge({
        title:action.title,
        content:action.content
      });
    default:
      return state;
  }
}