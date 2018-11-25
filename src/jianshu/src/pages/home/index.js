import React,{Component} from 'react';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import {connect} from 'react-redux';
import {actionCreators} from './store';
import home from './home.css';

class Home extends Component{
  handleScrolltop(){
    // 左侧是0 顶部是0
    window.scrollTo(0,0);
  }
  render(){
    return(
      <div className={home.wrapper}>
        <div className={home.homeLeft}>
          {/* <img src="../../stactics/banner1.jpg" alt=""/> */}
          <img src="//upload.jianshu.io/admin_banners/web_images/4579/0e3caa20d3d30658dc4b393d1ea105baa7e78248.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
          <Topic></Topic>
          <List></List>
        </div>
        <div className={home.homeRight}>
          <Recommend></Recommend>
          <Writer></Writer>
        </div>
        {
          this.props.showScroll ? <div className={home.backTop} onClick={this.handleScrolltop}>回到顶部</div> : null
        }
      </div>
    )
  }

  // 页面初始数据渲染,组件挂在完毕时请求
  componentDidMount(){
    this.props.changeHomeData();
    this.bindEvents();
  }
  componentWillUnmount(){
    window.removeEventListener('scroll',this.props.changeScrollTopShow);
  }

  bindEvents(){
    window.addEventListener('scroll',this.props.changeScrollTopShow);
  }
}

const mapStateToProps = (state) => ({
  showScroll:state.home.get('showScroll')
});

const mapDispatchToProps = (dispatch) => ({
  changeHomeData(){
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow(){
    if(document.documentElement.scrollTop>200){
      dispatch(actionCreators.toggleTopShow(true));
    }else{
      dispatch(actionCreators.toggleTopShow(false));
    }
    // console.log(document.documentElement.scrollTop);
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(Home);