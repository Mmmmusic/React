import React,{Component,Fragment} from 'react';
import 'antd/dist/antd.css';
import { List } from 'antd';
import {connect} from 'react-redux';
import './style.css';
import { getDeleteItemAction,} from './store/actionCreator';

class ShowList extends Component{

  // constructor(props){
  //   super(props);
  //   this.state = store.getState();
  //   console.log(this.state);
    
  //   this.storeChange = this.storeChange.bind(this);
  //   // 当store里数据改变时,执行该方法
  //   subscribe(this.storeChange);
  // }

  // store发生变化时执行
  // storeChange(){
  //   // 重新去store里取数据,调用setStae替换掉当前组件里的数据
  //   this.setState(store.getState());
  // }

  render(){
    return(
      <Fragment>
        <div className="mar-all">
          <div>信息列表</div>
          <List
            style={{marginTop:'10px',width:'300px'}}
            bordered
            dataSource={this.props.list}
            renderItem={(item,index) => (<List.Item onClick={this.props.del.bind(this,index)}>
              姓名：{item.name}<br />
              性别：{item.sex}<br />
              年龄：{item.age}<br />
              爱好：{item.hobby}<br />
            </List.Item>)}
          />
        </div>
      </Fragment>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    list:state.list
  }
}
const mapDispatchToprops = (dispatch) => {
  return{
    del(index){
      console.log(index);
      const action = getDeleteItemAction(index);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps,mapDispatchToprops)(ShowList);