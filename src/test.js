// v-model???
import React,{Component} from 'react';

class Test extends Component{
  // 当父组件的render函数被运行时,它的子组件的render都会被重新执行
  render() {
    return(
      <h3>{this.props.content}</h3>
    )
  }
}

export default Test;