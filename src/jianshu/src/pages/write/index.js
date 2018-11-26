import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';

class Write extends Component{
  render(){
    // console.log(this.props);
    const {login} = this.props;
    if(login){
      return(
        <div>write</div>
      )
    }else{
      return  <Redirect to='/login'></Redirect>  
    }
  }
}

const mapStateToProps = (state) => ({
  login:state.login.get('login'),
})

export default connect(mapStateToProps,null)(Write);