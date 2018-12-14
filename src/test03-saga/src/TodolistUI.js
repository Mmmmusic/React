//UI组件只负责页面显示，又叫傻瓜组件，没有业务逻辑
import React, { Fragment } from "react";
import { Input ,Button ,List} from 'antd';

//一个普通函数，只有一个render函数时候，就可以叫做无状态组件，一般在UI组件中用到
const TodoListUI = (props)=>{
    return (
        <Fragment>
          <div style={{ marginTop: 10, marginLeft: 10 }}>
            <Input
              onChange={props.handleInputChange}
              value={props.inputValue}
              placeholder="hello"
              style={{ width: 300, marginRight: 10 }}
            />
            <Button onClick={props.handleBtnClick} type="primary">
              按钮
            </Button>
            <List
              style={{ marginTop: 10, width: 300 }}
              bordered
              dataSource={props.list}
              renderItem={(item, index) => (
                  //箭头函数调用方法，可以传值
                <List.Item onClick={()=>{props.handleItemDelete(index)}}>
                  {item}
                </List.Item>
              )}
            />
          </div>
        </Fragment>
    )
}

export default TodoListUI;
