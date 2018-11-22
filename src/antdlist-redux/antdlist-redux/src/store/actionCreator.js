import { iptNameVal, iptSexVal, iptAgeVal, iptHobbyVal, add_msg_item, del_todo_item } from "./actionTypes";

export const getNameChangeAction = (value) => ({
  type:iptNameVal,
  value
});
export const getSexChangeAction = (value) => ({
  type:iptSexVal,
  value
});
export const getAgeChangeAction = (value) => ({
  type:iptAgeVal,
  value
});
export const getHobbyChangeAction = (value) => ({
  type:iptHobbyVal,
  value
});

export const getAddItemAction = () => ({
  type:add_msg_item,
});
export const getDeleteItemAction = (index) => ({
  type:del_todo_item,
  index
});

