import {ADD_MESSAGE_VALUE,INPUT_NAME_VALUE,INPUT_GENDER_ITEM,INPUT_AGE_ITEM,INPUT_HOBBY_ITEM} from "./actionTypes"
export const getAddmessageAction=()=>({
    type:ADD_MESSAGE_VALUE
})
export const getInputNameAction=(value)=>({
    type:INPUT_NAME_VALUE,
    value
})
export const getInputGenderAction=(value)=>({
    type:INPUT_GENDER_ITEM,
    value
})
export const getInputAgeAction=(value)=>({
    type:INPUT_AGE_ITEM,
    value
})
export const getInputHobbyAction=(value)=>({
    type:INPUT_HOBBY_ITEM,
    value
})