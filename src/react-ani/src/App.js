import React, { Component ,Fragment} from 'react';
// 引用动画组件
import { CSSTransition,TransitionGroup } from 'react-transition-group';
// import './style.css';
import './ani.css';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      show:true,
      list:[],
    }
    // 绑定事件指向
    this.cl = this.cl.bind(this);
    this.itemlist = this.itemlist.bind(this);
    this.del = this.del.bind(this);
  }

  render(){
    return(
      <Fragment>
        {/* CSSTransition会自动帮我们做一些类名的增删 */}
        {/* <CSSTransition
          in={this.state.show}
          thimeout={400}
          classNames='fade'
          unmountOnExit
          onEntered={(el)=>{el.style.color = 'red'}}
          appear={true}
        >
          <h2>hi</h2>
        </CSSTransition> */}
        <TransitionGroup>
          {
            this.state.list.map((item,index)=>{
              return(
                <CSSTransition
                  in={this.state.show}
                  thimeout={400}
                  classNames='fade'
                  unmountOnExit
                  onEntered={(el)=>{el.style.color = 'red'}}
                  appear={true}
                  key={index}
                >
                  {/* <div key={item}>{item}</div> */}
                  <div onMouseOver={this.del}>{item}</div>
                </CSSTransition>
              )
            })
          }
        </TransitionGroup>
        {/* <h2 className={this.state.show ? 'show' : 'hide'}>hi</h2> */}
        {/* <button onClick={this.cl}>toggle</button> */}
        <button onClick={this.itemlist}>toggle</button>
      </Fragment>
    )
  }

  cl(){
    this.setState({
      // 状态切换,判断 show 是否存在
      show:this.state.show ? false : true,
    })
  }
  itemlist(){
    this.setState((prevState)=>{
      return{
        list:[...prevState.list,'item']
      }
    })
  }
  del(index){
    console.log(index);
    this.setState((prevState)=>{
      const arr = [...prevState.list];
      arr.splice(index,1);
      return{
        list:arr
      }
    })
  }
}

export default App;

