import {handleActions} from "redux-actions";
import { types } from "./actions";

const initialState = {
    list:[],
    //------------------------------
    getOrdersInProgress:false,
    getOrdersSuccess:false,
    getOrdersFailed:false,
    //------------------------------
    createOrderInProgress:false,
    createOrderSuccess:false,
    createOrderFailed:false,
    //------------------------------
    deleteOrderInProgress:false,
    deleteOrderSuccess:false,
    deleteOrderFailed:false,
}

const reducer = handleActions({
    [types.createOrderInProgress]:state=>{
        return {
            ...state,
            createOrderInProgress:true,
            createOrderSuccess:false,
            createOrderFailed:false,
        }
    },
    [types.createOrderSuccess]:state=>{
        return {
            ...state,
            createOrderInProgress:false,
            createOrderSuccess:true,
            createOrderFailed:false,
        }
    },
    [types.createOrderFailed]:state=>{
        return {
            ...state,
            createOrderInProgress:false,
            createOrderSuccess:false,
            createOrderFailed:true,
        }
    },
    //------------------------------------
    [types.getOrdersInProgress]:state=>{
        return {
            ...state,
            getOrdersInProgress:true,
            getOrdersSuccess:false,
            getOrdersFailed:false,
        }
    },
    [types.getOrdersSuccess]:(state, action)=>{
        return {
            ...state,
            getOrdersInProgress:false,
            getOrdersSuccess:true,
            getOrdersFailed:false,
            list:action.payload
        }
    },
    [types.getOrdersFailed]:state=>{
        return {
            ...state,
            getOrdersInProgress:false,
            getOrdersSuccess:false,
            getOrdersFailed:true,
        }
    },
    //-----------------------------------
    [types.deleteOrderInProgress]:state=>{
        return {
            ...state,
            deleteOrderInProgress:true,
            deleteOrderSuccess:false,
            deleteOrderFailed:false,
        }
    },
    [types.deleteOrderSuccess]:state=>{
        return {
            ...state,
            deleteOrderInProgress:false,
            deleteOrderSuccess:true,
            deleteOrderFailed:false,
        }
    },
    [types.deleteOrderFailed]:state=>{
        return {
            ...state,
            deleteOrderInProgress:false,
            deleteOrderSuccess:false,
            deleteOrderFailed:true,
        }
    },
},initialState)

export default reducer