import React,{Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {actionCreators} from './store';
import detail from './detail.css';

class Detail extends Component{

  componentDidMount(){
    this.props.getDetail(this.props.match.params.id);
  }

  render(){
    // console.log(this.props.match.params.id);
    return(
      <div className={detail.detailWrapper}>
        <div className={detail.detailHeader}>{this.props.title}</div>
        <div className={detail.detailContent} dangerouslySetInnerHTML={{__html:this.props.content}}></div>
      </div>
    )
  }

}

const mapStateToProps = (state) => ({
  title:state.detail.get('title'),
  content:state.detail.get('content'),
});
const mapDispatchToProps = (dispatch) => ({
  getDetail(id){
    dispatch(actionCreators.getDetail(id));
  }
});

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Detail));