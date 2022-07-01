import { createAction } from "redux-actions";
import { API } from "../Api";

export const types = {
    getOrdersInProgress:"getOrdersInProgress",
    getOrdersSuccess:"getOrdersSuccess",
    getOrdersFailed:"getOrdersFailed",
    //------------------------------
    createOrderInProgress:"createOrderInProgress",
    createOrderSuccess:"createOrderSuccess",
    createOrderFailed:"createOrderFailed",
    //------------------------------
    deleteOrderInProgress:"deleteOrderInProgress",
    deleteOrderSuccess:"deleteOrderSuccess",
    deleteOrderFailed:"deleteOrderFailed",
}

const getOrdersInProgress = createAction(types.getOrdersInProgress)
const getOrdersSuccess = createAction(types.getOrdersSuccess)
const getOrdersFailed = createAction(types.getOrdersFailed)
//------------------------------
const createOrderInProgress = createAction(types.createOrderInProgress)
const createOrderSuccess = createAction(types.createOrderSuccess)
const createOrderFailed = createAction(types.createOrderFailed)
//------------------------------
const deleteOrderInProgress = createAction(types.deleteOrderInProgress)
const deleteOrderSuccess = createAction(types.deleteOrderSuccess)
const deleteOrderFailed = createAction(types.deleteOrderFailed)

const getOrders = () => {
    return (dispatch, getState)=>{
        dispatch(getOrdersInProgress())
        
        return API.ORDERS.get().then((res)=>{
            dispatch(getOrdersSuccess(res))
        }).catch((err)=>{
            dispatch(getOrdersFailed(err))
        })
    }
}

const createOrder = (order) => {
    return (dispatch, getState)=>{
        dispatch(createOrderInProgress())
        
        return API.ORDERS.new(order).then((res)=>{
            dispatch(createOrderSuccess(res)).
            dispatch(getOrders())
        }).catch((err)=>{
            dispatch(loginFailed(err))
        })
    }
}

const deleteOrder = (id) => {
    return (dispatch, getState)=>{
        dispatch(deleteOrderInProgress())

        return API.ORDERS.delete(id).then(res=>{
            dispatch(deleteOrderSuccess(res))
            dispatch(getOrders())
        })
        .catch(err=>{
            dispatch(deleteOrderFailed(err))
        })

    }
}

const orderActions = {
    getOrders,
    createOrder,
    deleteOrder
}

export default orderActions