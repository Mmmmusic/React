import { change_ipt_value, add_todo_item, del_todo_item } from "./actionTypes";

export const getInputChangeAction = (value) => ({
  type:change_ipt_value,
  value
});

export const getAddItemAction = () => ({
  type:add_todo_item,
});

export const getDeleteItemAction = (index) => ({
  type:del_todo_item,
  index
});

