import axios from 'axios';
import * as constants from './constants';
import {fromJS} from 'immutable';

const changeHomeData = (result) => ({
  type:constants.change_home_data,
  topicList:result.topicList,
  articleList:result.articleList,
  recommendList:result.recommendList
});

const addHomeList = (list,nextPage) => ({
  type:constants.add_article_list,
  list:fromJS(list),
  nextPage
})

// thunk可以把action写成一个函数
export const getHomeInfo = () => {
  return (dispatch)=>{
    axios.get('/api/home.json')
    .then((res)=>{
      const result = res.data.data;
      dispatch(changeHomeData(result));
      // console.log(result);
    })
    .catch((err)=>{
      console.log('请求失败');
    })
  }
}

export const getMoreList = (articlePage) => {
  return(dispatch)=>{
    axios.get('/api/homeList.json?page='+articlePage)
    .then((res)=>{
      const result = res.data.data;
      dispatch(addHomeList(result,articlePage+1));
      // console.log(result);
    })
    .catch((err)=>{
      console.log('请求失败');
    })
  }
}

export const toggleTopShow = (show) => ({
  type:constants.toggle_top_show,
  show
})