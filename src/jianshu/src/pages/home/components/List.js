import React,{Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from '../store';
import list from '../home.css';
import {Link} from 'react-router-dom';

class List extends Component{
  render(){
    const {articleList,getMoreList,articlePage} = this.props;
    return(
      <div>
        {
          articleList.map((item,index)=>{
            return(
              // 动态路由
              <Link key={index} to={'/detail/' + item.get('id')}>
                <div className={list.listItem}>
                  <img src={item.get('imgUrl')} alt="" className={list.listPic}/>
                  <div className={list.listInfo}>
                    <h3 className={list.listTitle}>{item.get('title')}</h3>
                    <p className={list.listDesc + ' ' +list.demo}>{item.get('desc')}</p>
                  </div>
                </div>
              </Link>
              
            )
          })
        }
        <div className={list.loadMore} onClick={()=>getMoreList(articlePage)}>加载更多</div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  articleList:state.home.get('articleList'),
  articlePage:state.home.get('articlePage')
});
const mapDispatchToProps = (dispatch) => ({
  getMoreList(articlePage){
    dispatch(actionCreators.getMoreList(articlePage));
  }
})

export default connect(mapStateToProps,mapDispatchToProps)(List);