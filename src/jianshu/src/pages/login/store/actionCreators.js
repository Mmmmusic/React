import axios from 'axios';
import * as constants from './constants';

const changeLogin = () => ({
  type:constants.change_login,
  value:true
})

export const handleLogin = (account,password) => {
  return(dispatch) => {
    axios.get('/api/login.json?account='+account+'&password='+password)
    .then((res)=>{
      const result = res.data.data;
      if(result){
        dispatch(changeLogin())
      }else{
        console.log('登录失败');
      }
    })
    .catch((err)=>{
      console.log('请求失败');
    })
  }
}

// 等于一个函数,函数的返回值是一个对象
export const logout = () => ({
  type:constants.Logout,
  value:false
})