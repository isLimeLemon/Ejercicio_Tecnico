import {handleActions} from "redux-actions";
import { types } from "./actions";

const initialState = {
    validSession:false,
    loginInProgress:false,
    loginSuccess:false,
    loginFailed:false,
    token:'',
    apiErrors:{}
}

const reducer = handleActions({
    [types.logOut]:state =>({
        ...initialState
    }),
    [types.loginInProgress]:state => ({
        ...state,
        loginInProgress:true,
        loginSuccess:false,
        loginFailed:false,
    }),
    [types.loginFailed]:(state, action) => {
        return {
        ...state,
        loginInProgress:false,
        loginSuccess:false,
        loginFailed:true, 
        validSession:false,
        apiErrors:action
    }},
    [types.loginSuccess]:(state, action) =>{
        return {
            ...state,
            loginInProgress:false,
            loginSuccess:true,
            loginFailed:false, 
            token:action.payload,
            validSession:true
        }
    }
},initialState)

export default reducer