import C from './constants';

export const increment = ()=>{
    return {
        type: C.INCREMENT
    }
}

export const decrement = ()=>{
    return {
        type: C.DECREMENT
    }
}