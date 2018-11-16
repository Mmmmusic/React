// 引入JSX语法依赖
// Fragment是顶层元素占位符 
// 解构赋值
import React,{Component,Fragment} from 'react';

class TodoList extends Component{
  // 定义数据
  constructor(props){
    // super指父类Component
    super(props);

    // 事件指向
    //
    // 输入框事件 // 在构造函数中使用bind绑定this
    this.ipt = this.ipt.bind(this);
    // submit提交事件
    this.cl = this.cl.bind(this);

    // state负责存储组件里的数据
    this.state = {
      iptValue:"",
      list:[],
    }
    // console.log(this.state);
  }
  render(){
    // render函数外层必须有一个顶层元素
    return(
       <Fragment>
        <div id="wrapper">
          <input type="text" value={this.state.iptValue} onChange={this.ipt}/>
          <button className="submit" onClick={this.cl}>submit</button>
          <div id="info">{
            this.state.list.map((item,index)=>{
              return <p key={index} className="listInfo" onClick={this.del.bind(this,index)}>{index} {item}</p>
            })
          }
          </div>
        </div>
      </Fragment>
    )
  }

  // 定义事件写在render函数之外
  // 事件绑定要用bind改变this指向为 当前对象

  // 取值
  ipt(e){
    // 如果想改变state里的数据,不能直接去修改,必须要用 setState({}) 方法
    this.setState({
      iptValue : e.target.value,
    });
  }

  // 映射
  cl(){
    this.setState({
      list:[...this.state.list,this.state.iptValue],
      iptValue:'',
    })
    console.log(this)
  }

  // 单个删除
  del(index){
    // immutable
    // state不允许我们做任何的改变,需要改时可以先把这个存起来,方便后期性能优化

    // 数组存起来
    const arr = [...this.state.list];
    // 删除对应下标值
    arr.splice(index,1);
    // 数组覆盖
    this.setState({
      list:arr
    })
    console.log(index);
    if(this.state.list.length == 1){
      alert("空空如也");
    }
  }
  
}

export default TodoList;