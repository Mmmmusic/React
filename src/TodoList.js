// 引入JSX语法依赖
// Fragment是顶层元素占位符 
// 解构赋值
import React,{Component,Fragment} from 'react';

// 引入组件
import TodoItem from './TodoItem';
import Test from './test';

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
    // 删除事件
    this.del = this.del.bind(this);

    // state负责存储组件里的数据
    // 当组件的state或者props发生改变的时候,render函数就会重新执行

    this.state = {
      iptValue:"",
      list:[],
    }
    // console.log(this.state);
  }
  render(){
    console.log('数据只要被改变,render就会被执行');
    // render函数外层必须有一个顶层元素
    return(
      <Fragment>
        {/* Fragment是一个JSX组件,以大写开头的标签都是一个组件 */}
        <div id="wrapper">
          {/* 不能直接用for,要用htmlFor */}
          {/* 默认是转义的,可以用dangerouslySetInnerHTML={{__html:item}} 取消转义 */}
          {/* <p key={index} className="listInfo" onClick={this.del.bind(this,index)} >{index} {item}</p>*/}
          <label htmlFor="insert">输入信息：</label>
          <input 
            type="text" 
            value={this.state.iptValue} 
            onChange={this.ipt} 
            className="input" 
            id="insert"
          />
          <button className="submit" onClick={this.cl}>submit</button>
          <div id="info">{
            this.getTodoItem()

            // 未分离写法
            // this.state.list.map((item,index)=>{
            //   return ( 
            //     <div>
            //       {/* 组件通信 this.props.(属性或方法名) */}
            //       <TodoItem 
            //         content={item} 
            //         index={index}
            //         childDel={this.del}
            //       />
            //     </div>
            //   )
            // })

          }
          </div>
          {/* Test组件 */}
          <Test content={this.state.iptValue}/>
        </div>
      </Fragment>
    )
  }

  // 定义事件写在render函数之外
  // 事件绑定要用bind改变this指向为 当前对象

  // 遍历数组方法
  getTodoItem(){
    return this.state.list.map((item,index)=>{
      return ( 
        <div key={index}>
          {/* 组件通信 this.props.(属性或方法名) 
              外层的div是用来注释用的,key值放在最外层元素上
          */}
          <TodoItem
            content={item} 
            index={index}
            childDel={this.del}
          />
        </div>
      )
    })
  }

  // 取值
  ipt(e){
    // 如果想改变state里的数据,不能直接去修改,必须要用 setState({}) 方法

    // 函数写法
    const val = e.target.value;
    this.setState(()=>({
      iptValue:val
    }));
    // 对象写法
    // this.setState({
    //   iptValue : e.target.value,
    // });
  }

  // 映射
  cl(){
    if(this.state.iptValue == ''){
      console.log("未输入任何内容");
    }else{
      // 函数写法简写
      // setState有一个形参precState,表示修改前的数据(this.state)
      this.setState((prevState)=>({
        list:[...prevState.list,prevState.iptValue],
        iptValue:'',
      }));
      // 函数写法
      // this.setState(()=>{
      //   return{
      //     list:[...this.state.list,this.state.iptValue]
      //     iptValue:'',
      //   }
      // })
      // 对象写法
      // this.setState({
      //   list:[...this.state.list,this.state.iptValue],
      //   iptValue:'',
      // })
      console.log(this);
    }
  }

  // 单个删除
  del(index){
    // immutable
    // state不允许我们做任何的改变,需要改时可以先把这个存起来,方便后期性能优化

    // 数组存起来
    // const arr = [...this.state.list];
    // 删除对应下标值
    // arr.splice(index,1);
    // 数组覆盖
    // 函数写法
    this.setState((prevState)=>{
      const arr = [...prevState.list];
      arr.splice(index,1);
      return {
        list:arr
      }
    });
    // 对象写法
    // this.setState({
    //   list:arr
    // })
    console.log(index);
    if(this.state.list.length == 1){
      alert("最后一条也删了~");
    }
  }
  
}

export default TodoList;