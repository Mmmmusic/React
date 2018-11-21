import React,{Component,Fragment} from 'react';

class Infolist extends Component{

  constructor(props){
    super(props);
  }

  render(){
    const {name,sex,age,hobby,index} = this.props;
    return(
      <Fragment>
        <div className="showList" onClick={this.del.bind(this,index)}>
          <h4>姓名：{name}</h4>
          <h4>性别：{sex}</h4>
          <h4>年龄：{age}</h4>
          <h4>爱好：{hobby}</h4>
          <h4>下标：{index}</h4>
        </div>
      </Fragment>
    )
  }
  
  del(){
    const {childDel,index} = this.props;
    childDel(index);
  }
}

export default Infolist;