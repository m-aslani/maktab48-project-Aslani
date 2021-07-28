import { ActionTypeUserInfo } from "../constants/action-type";

export const setUser = (user)=>{
    return{
        type: ActionTypeUserInfo.ADD_USER_INFO,
        payload:user
    }
}

export const setUserInfo = (user)=>(dispatch)=>{
    dispatch(setUser(user));
}