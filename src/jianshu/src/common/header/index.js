import React from 'react';
import {connect} from 'react-redux';
import header from './header.css';

const Header = (props) => {
  console.log(props);
  return(
    <div className={header.headBox}>
      <a href="/ " className={header.logo}></a>
      <div className={header.nav}>
        <p className={header.active}>首页</p>
        <p>下载App</p>
        <p>登录</p>
        <p><i className="iconfont">&#xe636;</i></p>
        <div className={header.searchBox}>
          <input type="text" className={header.search} placeholder="搜索"/>
          <i className="iconfont">&#xe62a;</i>
        </div>
        <div className={header.btnBox}>
          <button className={header.writting}>
            <i className="iconfont">&#xe670;</i>
            写文章
          </button>
          <button className={header.reg}>注册</button>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return{
    a:state.header.a
    // a:state.header.get('a')
  }
}
const mapDispatchToProps = (dispatch) => {
  return{

  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);