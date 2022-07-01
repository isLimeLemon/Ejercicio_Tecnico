export const getValidSession = (state) => {
    return state.session.validSession
}

export const loginInProgress = (state) => {
    return state.session.loginInProgress
}

export const getToken = (state) => {
    return state.session.token
}