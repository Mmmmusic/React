import React,{Component} from 'react';
import {connect} from 'react-redux';
import { actionCreators } from '../person/store';
import personStyle from './person.css';

class Person extends Component{


  render(){
    if(this.props.person){
      return(
        <div className={personStyle.title} onClick={this.props.hide}>person</div>
      )
    }else{
      console.log('null'); 
    }

    return(
      <div>
        <button onClick={this.props.show}>Person</button>
      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return{
    person:state.person.get('person')
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    show(){
      dispatch(actionCreators.changeShow());
    },
    hide(){
      dispatch(actionCreators.changeHide());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Person);