import C from './constants'
import { combineReducers } from 'redux'

const counter = (state=0,action)=>{
    switch(action.type){
        case C.INCREMENT:
            return state + 1
        case C.DECREMENT:
            return state - 1
        default:
            return state 
    }
}

export default combineReducers({
    counter
})