import axios from 'axios';
import * as constants from './constants';

const changeDetail = (title,content) => ({
  type:constants.change_detail,
  title,
  content,
});

export const getDetail = (id) => {
  return(dispatch) => {
    // axios({
    //   method: 'get',
    //   url: '/api/detail.json',
    //   data: {
    //     id: id,
    //   }
    // })
    axios.get('/api/detail.json?id='+id)
    .then((res)=>{
      const result = res.data.data;
      dispatch(changeDetail(result.title,result.content))
    })
    .catch((err)=>{
      console.log('请求失败');
    })
  }
}