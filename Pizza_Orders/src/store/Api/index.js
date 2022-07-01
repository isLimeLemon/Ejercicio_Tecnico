import axios from 'axios'
import { store } from '..'
import { ApiCodes } from '../../constants/ApiCodes'
import { getToken } from '../session/selector'
import sessionActions from '../session/actions'

const Axios =  axios.create({
    baseURL: "https://order-pizza-api.herokuapp.com/api",
    timeout: 3000,
    headers:{
        'Content-Type': 'application/json;'
    }
})

Axios.interceptors.request.use((config)=>{
    
    const state = store.getState()
    config.headers.Authorization = getToken(state)

    console.warn(conf)
    return config

},
(error)=>{
    return Promise.reject(error)
})

Axios.interceptors.response.use((res)=>res, ({response})=>{

    if(response.status === ApiCodes.invalidSession){

        store.dispatch(sessionActions.logOut())

    }

    return Promise.reject(response)
})

export const API = {

    SESSION:{
        logIn:(username, password)=>{
            return Axios.post('/auth/', {username,password})
        }
    },
    
    ORDERS:{
        get:()=>{
            return Axios.get('/orders')
        },
        new:(productData)=>{
            return Axios.post('/orders', productData)
        },
        delete:(id)=>{
            return Axios.delete(`/orders/${id}`)
        }
    }

}