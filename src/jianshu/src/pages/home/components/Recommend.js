import React,{Component} from 'react';
import {connect} from 'react-redux';
import recommend from '../home.css';

class Recommend extends Component{
  render(){
    return(
      <div className={recommend.recommendWrapper}>
        {
          this.props.recommendList.map((item)=>{
            return (
              <div className={recommend.recommendItem} key={item.get('id')}>
                <a href="###"><img src={item.get('imgUrl')} alt={item.get('id')}/></a>
              </div>
            )
          })
        }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  recommendList:state.home.get('recommendList'),
})

export default connect(mapStateToProps,null)(Recommend);