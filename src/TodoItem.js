// 引入React视图层框架,JSX语法依赖
import React,{Component} from 'react';
// 引入PropTypes,对属性或方法进行强校验
import PropTypes from 'prop-types';

// 组件通信不仅可以传递数据,也可以传递方法
// 父子通信用 属性 传递,子组件用this.props.(数据) 接收
// 子父通信也用 属性 传递,但是注意this指向,子组件用this.props.(方法名) 调用父组件方法

class TodoItem extends Component{

  constructor(props){
    super(props);
    this.del = this.del.bind(this);
  }

  render(){
    // 解构赋值写法
    const {content,test} = this.props;
    return (
      // <p onClick={this.del} className="listInfo">{this.props.index} {this.props.content}</p>
      <p onClick={this.del} className="listInfo">{this.props.index} {test}{content}</p>
    )
  }

  del(){
    // this.props.childDel(this.props.index);
    // 解构赋值写法
    const {childDel,index} = this.props;
    childDel(index);
  }

}

// 组件数据强校验
TodoItem.propTypes = {
  // 必填项
  test:PropTypes.string.isRequired,
  // content属性必须是 字符串
  content:PropTypes.string,
  // childDel必须是 方法
  childDel:PropTypes.func,
  // index必须是 数字
  index:PropTypes.number
}
// 组件数据默认值设置
TodoItem.defaultProps = {
  test:"- ",
}

export default TodoItem;