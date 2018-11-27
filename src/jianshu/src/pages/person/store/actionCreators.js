import * as constants from './constants';

// 等于一个函数,函数的返回值是一个对象,这里传递的是actin的 类型(type) 和 值(value)
export const changeShow = () => ({
  type:constants.change_show,
  value:true
})
export const changeHide = () => ({
  type:constants.change_hide,
  value:false
})