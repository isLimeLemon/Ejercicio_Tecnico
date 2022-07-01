import { createAction } from "redux-actions";
import { API } from "../Api";

export const types = {
    loginInProgress:"logginInProgres",
    loginSuccess:"loginSuccess",
    loginFailed:"loginFailed",
    logOut:"logOut"
}

const loginInProgress = createAction(types.loginInProgress)
const loginSuccess = createAction(types.loginSuccess)
const loginFailed = createAction(types.loginFailed)

const logOutAction = createAction(types.logOut)


const logIn = (username, password) => {
    return (dispatch, getState,api)=>{
        dispatch(loginInProgress())
        
        return API.SESSION.logIn(username,password)
        .then((res)=>{
            console.warn(res)
            dispatch(loginSuccess(res.data))
        }).catch((err)=>{
            console.warn(err)
            dispatch(loginFailed(err.payload))
        })
    }
}

const logOut = () => {
    return (dispatch, getState, api)=>{
        dispatch(logOutAction())

        return Promise.resolve()
    }
}

const sessionActions = {
    logIn,
    logOut
}

export default sessionActions