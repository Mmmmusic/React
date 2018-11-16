import React,{Component} from 'react';

// 组件通信不仅可以传递数据,也可以传递方法
// 父子通信用 属性 传递,子组件用this.props.(数据) 接收
// 子父通信也用 属性 传递,但是注意this指向,子组件用this.props.(方法名) 调用父组件方法

class TodoItem extends Component{

  constructor(props){
    super(props);
    this.del = this.del.bind(this);
  }

  render(){
    return (
      <p onClick={this.del} className="listInfo">{this.props.index} {this.props.content}</p>
    )
  }

  del(){
    this.props.childDel(this.props.index);
  }

}

export default TodoItem;