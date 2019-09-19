import { combineReducers } from 'redux';
import C from '../actions/constatns'

const count = (state=0,action)=>{
    switch(action.type){
        case C.INCREMENT:
            return state + 1
        case C.DECREMENT:
            return state - 1
        default:
            return state
    }
}
const todo = (state=[],action)=>{
    const hasDay = state.some(skiDay=>
        skiDay.todo === action.payload.todo
    ) 
    switch(action.type){
        case C.ADD_TODO:
            return (!hasDay&& action.payload.todo!=="")?[...state,action.payload]:state
        case C.REMOVE_TODO:
            return state.filter((arr,key)=>key!==action.payload)
        case C.TOOGLE:
            return state.map((arr,key)=>{
                if(key===action.payload){
                    return{
                        todo: arr.todo,
                        completed: !arr.completed
                    }
                }else{
                    return arr
                }
            }) 
        default:
            return state
    }
}

export default combineReducers({
    count,
    todo
})