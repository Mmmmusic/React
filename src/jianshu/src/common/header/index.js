import React,{Component} from 'react';
import {connect} from 'react-redux';
import header from './header.css';
import * as actionCreators from './store/actionCreator';

class Header extends Component{

  getSearchList(){
    const {focused,list} = this.props;
    if(focused){
      return(
        <div className={header.searchInfo}>
          <div className={header.searchInfoTitle}>
            热门搜索
            <span className={header.searchInfoSwitch}>
              换一批
            </span>
          </div>
          <div className={header.searchInfoList}>
            {
              list.map((item)=>{
                return  <a href="###" key={item}>{item}</a>
              })
            }
          </div>
        </div>
      )
    }else{
      return null;
    }
  }

  render(){
    const {focused,handleInputFocus,handleInputBlur} = this.props;
    // console.log(this.props);
    return(
      <div className={header.headBox}>
        <a href="/" className={header.logo}></a>
        <div className={header.nav}>
          <p className={header.active}>首页</p>
          <p>下载App</p>
          <p>登录</p>
          <p><i className="iconfont">&#xe636;</i></p>
          <div className={header.searchBox}>
            <input 
              type="text" 
              className={header.search} 
              placeholder="搜索"
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            />
            <i className="iconfont">&#xe62a;</i>
            {this.getSearchList()}
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
}

// const getSearchList = (show) => {
  
// }

// // 无状态组件
// const Header = (props) => { 

// }

const mapStateToProps = (state) => {
  return{
    // a:state.header.get('a')
    // focused:state.getIn(['header','focused'])

    focused:state.header.get('focused'),
    // list是immutable数组
    list:state.header.get('list'),
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    // 搜索框聚焦
    handleInputFocus(){
      dispatch(actionCreators.getList());
      dispatch(actionCreators.searchFocus());
    },
    // 搜索框失焦
    handleInputBlur(){
      dispatch(actionCreators.searchBlur());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);