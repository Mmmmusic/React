import React,{Component} from 'react';
import {connect} from 'react-redux';
import topic from '../home.css';

// 专题
class Topic extends Component{
  render(){
    const {list} = this.props;
    return(
      <div className={topic.topicWrapper}>
        {
          list.map((item)=>{
            return(
              <div className={topic.topicItem} key={item.get('id')}>
                <img src={item.get('imgUrl')} alt=""/>
                {item.get('title')}
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  list:state.home.get('topicList'),
})
export default connect(mapStateToProps,null)(Topic);