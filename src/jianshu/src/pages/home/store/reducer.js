import {fromJS} from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  topicList:[],
  articleList:[],
  recommendList:[],
  articlePage:1,
  showScroll:false
});

const changeHomeData = (state,action) => {
  return state.merge({
    topicList:fromJS(action.topicList),
    articleList:fromJS(action.articleList),
    recommendList:fromJS(action.recommendList)
  });
}

const addArticleList = (state,action) => {
  return state.merge({
    'articleList':state.get('articleList').concat(action.list),
    'articlePage':action.nextPage
  });
}

export default (state=defaultState,action) => {
  switch(action.type){
    case constants.change_home_data:
      return changeHomeData(state,action);
    case constants.add_article_list:
      return addArticleList(state,action);
    case constants.toggle_top_show:
      return state.set('showScroll',action.show)
    default:
      return state;
  }
}