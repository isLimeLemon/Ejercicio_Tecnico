export const getOrders = (state) => {
    return state.orders.list
}

export const createInProgress = (state) => {
    return state.orders.createOrderInProgress
}

export const getInProgress = (state) => {
    return state.orders.getOrdersInProgress
}

export const deleteInProgress = (state) => {
    return state.orders.deleteOrderInProgress
}