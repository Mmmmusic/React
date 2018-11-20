// 引入JSX语法依赖
// Fragment是顶层元素占位符 
// 解构赋值
import React,{Component,Fragment} from 'react';

// 引入组件
import TodoItem from './TodoItem';
import Test from './test';
import LiveFunc from './LiveFunc';
import './style.css';

class TodoList extends Component{
  // 组件即将被挂载到页面  // 只执行一次,此时可以修改组件的state
  componentWillMount() {
    console.log('componentWillMount (挂载前)');
  }

  // 组件挂载到页面之后自动执行,在此可以请求数据
  componentDidMount() {
    console.log('componentDidMount (挂载后)');
  }

  // 组件被更新之前,它会自动被执行
  // 当props或state发生变化时执行,并且是在render之前,当新的props或state不需要更新组件时,返回false,防止render()重复渲染,组件较多时使用该生命周期函数能很好的优化性能
  // 使用不当会出现bug
  shouldComponentUpdate(newProps, newState) {
    // newProps是空JS对象,newState相当于是生成的虚拟DOM(也是JS对象)
    console.log('shouldComponentUpdate (是否更新)');
    return true;
  }

  // 组件被更新之前,它会被自动执行,但是它在shouldComponentUpdate之后执行
  // 如果shouldComponentUpdate返回true它会执行
  // 如果返回false,这个函数就不会被执行了
  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate (更新前)');
  }

  // 组件更新完成之后,它会被执行,此时可以访问DOM元素
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate (更新后)');
  }

  // 当一个组件从父组件接收参数
  // 只要父组件的render函数被重新执行了,子组件的这个生命周期就会被执行
  // 如果这个组件第一次存在于父组件中,不会执行
  // 如果这个组件之前存在于父组件中,才会执行
  componentWillReceiveProps(newProps) {
    console.log('componentWillReceiveProps',newProps);
  }

  // 当这个组件即将被从页面中剔除的时候,会被执行
  componentWillUnmount() {
    console.log('child componentWillUnmount (解除挂载)');
  }
  
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
    console.log('parent render');
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
            ref={(val)=>{this.input=val}}
          />
          <button className="submit" onClick={this.cl}>submit</button>
          <div id="info" ref={(val)=>{this.div=val}}>{
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
          {/* LiveFunc组件 */}
          <LiveFunc />
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
        <div key={item}>
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
    // const val = e.target.value;
    const val = this.input.value;
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
      }),()=>{
        // setState的第二个参数是一个回调函数
        console.log(this.div.querySelectorAll('div').length);
      });
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

      // ref直接操作DOM
      // console.log(this.div);
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