import React,{Component} from 'react';
import {connect} from 'react-redux';
import loginStyle from './login.css';
import {actionCreators} from './store';
// 路由重定向
import {Redirect} from 'react-router-dom';

class Login extends Component{
  render(){
    // console.log(this.props);
    const {login} = this.props;
    if(!login){
      return(
        <div className={loginStyle.loginWrapper}>
          <div className={loginStyle.loginBox}>
            <input type="text" placeholder="账号" ref={(content) => {this.account = content}}/>
            <input type="password" placeholder="密码" ref={(content) => {this.password = content}}/>
            <button 
              className={loginStyle.btn} 
              onClick={() => this.props.handleLogin(this.account, this.password)}
            >登录</button>
          </div>
        </div> 
      )
    }else{
      return  <Redirect to='/'></Redirect>  
    }
  }
}

const mapStateToProps = (state) => ({
  login:state.login.get('login'),
})

const mapDispatchToProps = (dispatch) => ({
  handleLogin(accountElement,passwordElement){
    dispatch(actionCreators.handleLogin(accountElement.value,passwordElement.value));
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(Login);