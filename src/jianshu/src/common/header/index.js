import React,{Component} from 'react';
import {connect} from 'react-redux';
import header from './header.css';
import * as actionCreators from './store/actionCreator';

class Header extends Component{

  getSearchList(){
    const {focused,mouseIn,list,page,totalPage,handleMouseEnter,handleMouseLeave,handelChangePage} = this.props;
    // 把immutable数组转换成普通的js数组
    const jsList = list.toJS();
    const pageList = [];
    if(jsList.length){
      for(let i = ((page - 1) * 10);i < page * 10;i++){
        // console.log(jsList[i]);
        pageList.push(
          <a href="###" key={jsList[i]}>{jsList[i]}</a>
        )
      }
    }

    if(focused || mouseIn){
      return(
        <div 
          className={header.searchInfo} 
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className={header.searchInfoTitle}>
            热门搜索
            <span 
              className={header.searchInfoSwitch}
              onClick={()=>handelChangePage(page,totalPage,this.spinIcon)}
            >
            <i className="iconfont" ref={(icon)=>{this.spinIcon=icon}}>&#xe851;</i>
              换一批
            </span>
          </div>
          <div className={header.searchInfoList}>
            {
              // list.map((item)=>{
              //   return  <a href="###" key={item}>{item}</a>
              // })
              pageList
            }
          </div>
        </div>
      )
    }else{
      return null;
    }
  }

  render(){
    const {handleInputFocus,handleInputBlur} = this.props;
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

// const getSearchList = (show) => {}

// // 无状态组件
// const Header = (props) => { }

const mapStateToProps = (state) => {
  return{
    // a:state.header.get('a')
    // focused:state.getIn(['header','focused'])

    focused:state.header.get('focused'),
    // list是immutable数组
    list:state.header.get('list'),
    page:state.header.get('page'),
    totalPage:state.header.get('totalPage'),
    mouseIn:state.header.get('mouseIn'),
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
    },
    handleMouseEnter(){
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave(){
      dispatch(actionCreators.mouseLeave());
    },
    handelChangePage(page,totalPage,spinIcon){
      // console.log(page,totalPage,spinIcon);
      // ref可以获取到组件渲染的真实DOM节点
      let originRotate = spinIcon.style.transform.replace(/[^0-9]/ig,'');
      if(originRotate){
        originRotate = parseInt(originRotate,10)
      }else{
        originRotate = 0;
      }
      spinIcon.style.transform = 'rotate('+(originRotate+360)+'deg)';

      if(page<totalPage){
        dispatch(actionCreators.changePage(page+1));
      }else{
        dispatch(actionCreators.changePage(1));
      }
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);