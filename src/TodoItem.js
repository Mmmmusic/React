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

  // 组件是否更新
  shouldComponentUpdate(nextProps,nextState){
    if(nextProps.content !== this.props.content){
      return true;
    }else{
      return false;
    }
  }

  render(){
    console.log('child render');
    // 解构赋值写法
    const {content,test} = this.props;
    // 层层解析
    // JSX(先转换成后面的方法,createElement) -> createElement -> JS对象(虚拟DOM) -> 真实的DOM
    return (
      // 两种写法效果一致
      // <div><span>item</span></div>
      // React.createElement('div',{},React.createElement('span',{},'item')) // 更为底层
      // <p onClick={this.del} className="listInfo">{this.props.index} {this.props.content}</p>
      <p onClick={this.del} className="listInfo">{this.props.index} {test}{content}</p>
    )
  }
  
  // 当一个组件从父组件接收参数
  // 只要父组件的render函数被重新执行了,子组件的这个生命周期就会被执行
  // 如果这个组件第一次存在于父组件中,不会执行
  // 如果这个组件之前存在于父组件中,才会执行
  componentWillReceiveProps(newProps) {
    console.log('child componentWillReceiveProps');
  }

  // 当这个组件即将被从页面中剔除的时候,会被执行
  componentWillUnmount() {
    console.log('child componentWillUnmount (解除挂载)');
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
  content:PropTypes.oneOfType([PropTypes.number,PropTypes.string]),
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