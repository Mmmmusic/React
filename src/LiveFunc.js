// 引入JSX语法依赖
// Fragment是顶层元素占位符 
// 解构赋值
import React,{Component,Fragment} from 'react';

// 引入组件
import TodoItem from './TodoItem';
import axios from 'axios';

class LiveFunc extends Component{
  
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

    this.state = {
      iptValue:"",
      list:[],
    }
    // console.log(this.state);
  }

  // 在组件初次挂载后请求数据
  componentDidMount(){
    axios.get('/api/todolist')
      .then(()=>{console.log('success')})
      .catch(()=>{console.log('error')})
  }

  render(){
    return(
      <Fragment>
        {/* Fragment是一个JSX组件,以大写开头的标签都是一个组件 */}
        <div>
          <label htmlFor="insert">LiveFunc：</label>
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
          }
          </div>
        </div>
      </Fragment>
    )
  }

  // 遍历数组方法
  getTodoItem(){
    return this.state.list.map((item,index)=>{
      return ( 
        <div key={item}>
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
    }
  }

  // 单个删除
  del(index){
    // immutable
    // state不允许我们做任何的改变,需要改时可以先把这个存起来,方便后期性能优化

    // 函数写法
    this.setState((prevState)=>{
      const arr = [...prevState.list];
      arr.splice(index,1);
      return {
        list:arr
      }
    });
    console.log(index);
    if(this.state.list.length == 1){
      alert("最后一条也删了~");
    }
  }
  
}

export default LiveFunc;