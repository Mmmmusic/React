import React, { Component,Fragment } from 'react';
import Infolist from './Infolist';

var arr = [];
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name:'',
      sex:'',
      age:'',
      hobby:'',
      list:[
        {
          name:'张三',
          sex:'男',
          age:25,
          hobby:'看书'
        },
        {
          name:'李四',
          sex:'男',
          age:22,
          hobby:'看书'
        },
        {
          name:'王五',
          sex:'男',
          age:20,
          hobby:'看书'
        }
      ],
      flag:false,
      show:false,
      x:0
    }
    this.submit = this.submit.bind(this);
    this.nameVal = this.nameVal.bind(this);
    this.sexVal = this.sexVal.bind(this);
    this.ageVal = this.ageVal.bind(this);
    this.hobbyVal = this.hobbyVal.bind(this);
    this.abs = this.abs.bind(this);
    this.cancel = this.cancel.bind(this);
  }

  render() {
    return (
      <Fragment>
        <div>
          <div className="app">
            <div className={this.state.flag ? 'show mask' : 'hide mask'}>
              <div className="btnFlow">
                <div className="btnDesc">确定要删除吗？</div>
                <div className="btnBox">
                  <button className="btnCancel" onClick={this.cancel}>取消</button>
                  <button className="btnRed" onClick={this.abs}>确认</button>
                </div>
              </div>
            </div>
            <input 
              type="text" 
              placeholder="姓名" 
              value={this.state.name}
              onChange={this.nameVal}
            /><br/>
            <input 
              type="text" 
              placeholder="性别" 
              maxLength="1"
              value={this.state.sex}
              onChange={this.sexVal}          
            /><br/>
            <input 
              type="number" 
              placeholder="年龄" 
              max="99"
              value={this.state.age}
              onChange={this.ageVal}          
            /><br/>
            <input 
              type="text" 
              placeholder="爱好" 
              value={this.state.hobby}
              onChange={this.hobbyVal}          
            /><br/>
            <button onClick={this.submit}>添加</button>
            <br/>
          </div>
          <div className="showInfo">
            <h4>信息列表</h4>
            {
              this.state.list.map((item,index)=>{
                return ( 
                  <div key={index}>
                    <div className="showList">
                      <h4>姓名：{item.name}</h4>
                      <h4>性别：{item.sex}</h4>
                      <h4>年龄：{item.age}</h4>
                      <h4 className="favo">爱好：{item.hobby}</h4>
                      <div className="btnDel">
                        <button onClick={this.del.bind(this,index)}>删除</button>
                      </div>
                    </div>
                    {/* <Infolist 
                      name={item.name}
                      sex={item.sex}
                      age={item.age}
                      hobby={item.hobby}
                      index={index}
                      childDel={this.del}
                    /> */}
                  </div>
                )
              })
            }
          </div>
        </div>
      </Fragment>
    );
  }

  nameVal(e){
    this.setState({
      name:e.target.value
    })
  }
  sexVal(e){
    this.setState({
      sex:e.target.value
    })
  }
  ageVal(e){
    if(e.target.value >= 99){
      e.target.value = 99;
    }
    this.setState({
      age:e.target.value
    })
  }
  hobbyVal(e){
    this.setState({
      hobby:e.target.value
    })
  }

  // 添加信息
  submit(){
    if(this.state.name !== '' && this.state.sex !== '' && this.state.age !== '' && this.state.hobby !== ''){
      arr = this.state.list;
      arr.unshift({
        name:this.state.name,
        sex:this.state.sex,
        age:this.state.age,
        hobby:this.state.hobby
      })
      // console.log(arr);
      this.setState({
        list:arr,
      })
      this.state.name = '';
      this.state.sex = '';
      this.state.age = '';
      this.state.hobby = '';
      console.log('提交成功',this.state.list);
    }else{
      console.log('未输入完整信息');
    }
  }

  // 删除按钮
  del(index){
    this.setState({
      flag:true,
    })
    this.state.x = index;
    console.log(this.state.flag)
    if(this.state.list.length == 0){
      alert("最后一条也删了~");
    }
  }

  // 确认删除
  abs(){
    this.setState((prevState)=>{
      const newArr = [...prevState.list];
      newArr.splice(this.state.x,1);
      arr.splice(this.state.x,1);
      return {
        list:newArr,
        flag:true
      }
    });
    this.setState({
      flag:false,
      show:true
    })
  }

  // 取消删除
  cancel(){
    this.setState({
      flag:false,
      show:false
    })
  }

}

export default App;
