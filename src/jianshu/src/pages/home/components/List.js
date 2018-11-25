import React,{Component} from 'react';
import {connect} from 'react-redux';
import {actionCreators} from '../store';
import list from '../home.css';

class List extends Component{
  render(){
    const {articleList,getMoreList,articlePage} = this.props;
    return(
      <div>
        {
          articleList.map((item,index)=>{
            return(
              <div className={list.listItem} key={index}>
                <img src={item.get('imgUrl')} alt="" className={list.listPic}/>
                <div className={list.listInfo}>
                  <h3 className={list.listTitle}>{item.get('title')}</h3>
                  <p className={list.listDesc}>{item.get('desc')}</p>
                </div>
              </div>
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